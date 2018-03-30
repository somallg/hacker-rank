/**
 * Test specs for strange-advertising problem
 * @url https://www.hackerrank.com/challenges/strange-advertising/problem
 */

const { solveStrangeAdvertising } = require('./strange-advertising');

describe('StrangeAdvertising', () => {
  describe('solveStrangeAdvertising', () => {
    it('should return 2 when input 1', () => {
      expect(solveStrangeAdvertising(1)).toEqual(2);
    });

    it('should return 5 when input 2', () => {
      expect(solveStrangeAdvertising(2)).toEqual(5);
    });

    it('should return 9 when input 3', () => {
      expect(solveStrangeAdvertising(3)).toEqual(9);
    });

    it('should return 56 when input 7', () => {
      expect(solveStrangeAdvertising(7)).toEqual(56);
    });

    it('should return 56 when input 7', () => {
      expect(solveStrangeAdvertising(7)).toEqual(56);
    });
  });
});
