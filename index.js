const fs = require('fs');

const file = JSON.parse(fs.readFileSync('quiz_questions.json', 'utf8'));

const getSpreadOfPercentCorrectQuizQuestions = obj => {
  /**
   * TODO dynamically break down sentence into frequent words
   */
  const result = {
    who: { aboveFiftyPercent: 0, belowFiftyPercent: 0, total: 0 },
    what: { aboveFiftyPercent: 0, belowFiftyPercent: 0, total: 0 },
    where: { aboveFiftyPercent: 0, belowFiftyPercent: 0, total: 0 },
    when: { aboveFiftyPercent: 0, belowFiftyPercent: 0, total: 0 },
    why: { aboveFiftyPercent: 0, belowFiftyPercent: 0, total: 0 },
    select: { aboveFiftyPercent: 0, belowFiftyPercent: 0, total: 0 },
    except: { aboveFiftyPercent: 0, belowFiftyPercent: 0, total: 0 },
    how: { aboveFiftyPercent: 0, belowFiftyPercent: 0, total: 0 },
    which: { aboveFiftyPercent: 0, belowFiftyPercent: 0, total: 0 },
  };
  const fiveWs = [
    'who',
    'what',
    'where',
    'when',
    'why',
    'select',
    'except',
    'how',
    'which',
  ];
  // const exemptWords = [
  //   'do',
  //   'has',
  //   'will',
  //   'to',
  //   'at',
  //   'of',
  //   'between',
  //   'the',
  //   'a',
  //   'an',
  //   'and',
  //   'but',
  //   'so',
  // ];

  obj.forEach(textPercent => {
    const { text, percent_correct: percentCorrect } = textPercent;
    // check if text exist
    if (text) {
      for (let w = 0; w <= fiveWs.length - 1; w += 1) {
        const singleW = fiveWs[w];
        if (
          text.toLowerCase().includes(singleW) &&
          percentCorrect * 100 <= 50
        ) {
          result[singleW].belowFiftyPercent += 1;
          result[singleW].total += 1;
          break;
        }
        if (text.toLowerCase().includes(singleW) && percentCorrect * 100 > 50) {
          result[singleW].aboveFiftyPercent += 1;
          result[singleW].total += 1;
          break;
        }
      }
    }
  });
  console.log(obj.length);
  return result;
};

console.log(getSpreadOfPercentCorrectQuizQuestions(file));
