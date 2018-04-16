/**
 * Test specs for missing-integer problem
 * @url https://www.hackerrank.com/challenges/missing-integer/problem
 */

import { solveMissingInteger } from './missing-integer';

describe('MissingInteger', () => {
  describe('solveMissingInteger', () => {
    it('should return 5 when input ', () => {
      expect(solveMissingInteger([1, 3, 6, 4, 1, 2])).toEqual(5);
    });

    it('should return 4 when input ', () => {
      expect(solveMissingInteger([1, 2, 3])).toEqual(4);
    });

    it('should return 1 when input ', () => {
      expect(solveMissingInteger([-1, -2, 3])).toEqual(1);
    });
  });
});
