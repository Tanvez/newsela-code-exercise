const fs = require('fs');

const file = JSON.parse(fs.readFileSync('quiz_questions.json', 'utf8'));
const filterWords = [
  'do',
  'has',
  'will',
  'to',
  'at',
  'of',
  'between',
  'the',
  'a',
  'an',
  'and',
  'but',
  'so',
  'for',
  'in',
  'was',
  '',
  'that',
  'is',
  'are',
  'as',
  'does',
  'on',
  'by',
  'it',
  'be',
  'with',
  'this',
  'than',
  'been',
  'its',
];

const breakDownQuestion = text => {
  const splitText = text
    .toLowerCase()
    // replaces special characters, puncuation, text containing carriage return, newline, and tab annotation
    .replace(/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\r\n\t>•\\|_+=-]/g, '')
    .split(' ')
    .filter(word => !filterWords.includes(word));
  return splitText;
};

const getSpreadOfPercentCorrect = arrOfobj => {
  const result = {};
  arrOfobj.forEach(questionPercentCorrect => {
    const { text, percent_correct: percentCorrect } = questionPercentCorrect;
    const splitText = breakDownQuestion(text);
    splitText.forEach(elementText => {
      if (!result[elementText]) {
        if (percentCorrect * 100 > 50) {
          result[elementText] = {
            aboveFiftyCount: 1,
            belowFiftyCount: 0,
            totalAppeared: 1,
            percentageOfTotalQuestions: 1 / arrOfobj.length,
          };
          if (percentCorrect * 100 <= 50) {
            result[elementText] = {
              aboveFiftyCount: 0,
              belowFiftyCount: 1,
              totalAppeared: 1,
              percentageOfTotalQuestions: 1 / arrOfobj.length,
            };
          }
        }
      }
      if (result[elementText]) {
        if (percentCorrect * 100 > 50) {
          result[elementText].aboveFiftyCount += 1;
          result[elementText].totalAppeared += 1;
          result[elementText].percentageOfTotalQuestions =
            result[elementText].totalAppeared / arrOfobj.length;
        }
        if (percentCorrect * 100 <= 50) {
          result[elementText].belowFiftyCount += 1;
          result[elementText].totalAppeared += 1;
          result[elementText].percentageOfTotalQuestions =
            result[elementText].totalAppeared / arrOfobj.length;
        }
      }
    });
  });
  return result;
};

const formatAndSortData = (dataObj, sortByStr) => {
  if (
    sortByStr === 'totalAppeared' ||
    sortByStr === 'aboveFiftyCount' ||
    sortByStr === 'belowFiftyCount'
  ) {
    const keys = Object.keys(dataObj);
    const formatedDataArray = [];
    keys.forEach(w => {
      const { totalAppeared, belowFiftyCount, aboveFiftyCount } = dataObj[w];
      formatedDataArray.push({
        word: w,
        totalAppeared,
        aboveFiftyCount,
        belowFiftyCount,
      });
    });
    return formatedDataArray.sort((a, b) => b[sortByStr] - a[sortByStr]);
  }
  throw new Error(
    "Please enter type to sort by 'totalAppeared', 'aboveFiftyCount', 'belowFiftyCount'"
  );
};

const data = getSpreadOfPercentCorrect(file);

const totalAppeared = formatAndSortData(data, 'totalAppeared');
const aboveFifty = formatAndSortData(data, 'aboveFiftyCount');
const belowFifty = formatAndSortData(data, 'belowFiftyCount');
console.log('totalAppeared ', totalAppeared.slice(0, 9));
console.log('aboveFiftyCount ', aboveFifty.slice(0, 9));
console.log('belowFiftyCount', belowFifty.slice(0, 9));

module.exports = {
  breakDownQuestion,
  getSpreadOfPercentCorrect,
  formatAndSortData,
};
