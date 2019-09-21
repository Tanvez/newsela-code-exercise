const chai = require('chai');
const { breakDownSentence, getSpreadOfPercentCorrect } = require('../index');

const { expect } = chai;
describe('Index Test', () => {
  const data = [
    {
      text:
        'The following summarize the history of Swat since 2008:\r\n>•\tThousands of tourists used to visit the SWAT valley for skiing.\r\n\r\n>•\tThe Taliban occupied the SWAT region and terrorized the people of the valley.\r\n\r\n>•\tThey killed the people who opposed them, setting fire to schools and banning girls from classes\r\n\r\n>•\tThe Taliban declared skiing was against their religion and burnt the main ski resort in Malam Jabba.\r\n\r\nWhich of these shows the next event in the history of the Swat Valley?',
      percent_correct: 0.32558139534883723,
    },
    {
      text: 'Why does President Obama want to raise the minimum wage?',
      percent_correct: 0.4793388429752066,
    },
    {
      text: "Why did people wear green ribbons during the president's speech?",
      percent_correct: 0.7024793388429752,
    },
    {
      text:
        'In the section "In Modern Warfare, No One Is Safe" why does the author include the Pew Research Center poll details?',
      percent_correct: 0.4314159292035398,
    },
  ];
  describe('breakDownSentence function', () => {
    it('Format text containing carriage return, newline, and tab annotation into an array of words', () => {
      const result = breakDownSentence(data[0].text);
      expect(result).to.be.an('array');
    });
  });
  describe('getSpreadOfPercentCorrect function', () => {
    it('should return an object containing words and values for aboveFiftyPercent and belowFiftyPercent', () => {
      const result = getSpreadOfPercentCorrect(data);
      expect(result.why.totalAppeared).to.equal(3);
    });
  });
});
