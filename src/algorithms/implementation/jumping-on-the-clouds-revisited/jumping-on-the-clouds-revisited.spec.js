/**
 * Test specs for jumping-on-the-clouds-revisited problem
 * @url https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem
 */

var {
  solveJumpingOnTheCloudsRevisited
} = require('./jumping-on-the-clouds-revisited');

describe('JumpingOnTheCloudsRevisited', () => {
  describe('solveJumpingOnTheCloudsRevisited', () => {
    it('should return 96 when input ', () => {
      expect(solveJumpingOnTheCloudsRevisited([0, 0, 0, 0, 0, 0, 0, 0], 2)).toEqual(96);
    });

    it('should return 88 when input ', () => {
      expect(solveJumpingOnTheCloudsRevisited([1, 1, 1, 1, 1, 1, 1, 1], 2)).toEqual(88);
    });

    it('should return 92 when input ', () => {
      expect(solveJumpingOnTheCloudsRevisited([0, 0, 1, 0, 0, 1, 1, 0], 2)).toEqual(92);
    });
  });
});
