var { pascalize } = require('../utils/string.util');

function specSource(problem) {
  return `/**
 * Test specs for ${problem} problem
 * @url https://www.hackerrank.com/challenges/${problem}/problem
 */

var { solve${pascalize(problem)} } = require('./${problem}');

describe('${pascalize(problem)}', () => {
  describe('solve${pascalize(problem)}', () => {
    it('should return when input ', () => {
      expect(solve${pascalize(problem)}()).toEqual();
    });

    it('should return when input ', () => {
      expect(solve${pascalize(problem)}()).toEqual();
    });
  });
});
`;
}

module.exports = {
  specSource
};
