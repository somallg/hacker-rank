/**
 * Test specs for fish problem
 */

import { generateArray } from '@challenges/util';

import { solveFish } from './fish';

describe('Fish', () => {
  describe('solveFish', () => {
    it('should return for Extreme Simple input [1] [0]', () => {
      expect(solveFish([1], [0])).toEqual(1);
    });

    it('should return for Duplicates input [1, 2] [0, 0]', () => {
      expect(solveFish([1, 2], [0, 0])).toEqual(2);
    });

    it('should return for Extreme Double input [2, 1] [0, 1]', () => {
      expect(solveFish([2, 1], [1, 0])).toEqual(1);
    });

    it('should return for No Intersections input [1, 2] [1, 1]', () => {
      expect(solveFish([1, 2], [1, 1])).toEqual(2);
    });

    it('should return 2 for Example input [4, 3, 2, 1, 5] [0, 1, 0, 0, 0]', () => {
      expect(solveFish([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])).toEqual(2);
    });

    it('should return 2 for Example input [4, 3, 2, 1, 5] [0, 1, 1, 0, 0]', () => {
      expect(solveFish([4, 3, 2, 1, 5], [0, 1, 1, 0, 0])).toEqual(2);
    });

    it('should run for Large input 50E3 items', () => {
      solveFish(generateArray(50e3), generateArray(50e3));
    }, 100);

    it('should run for Extra Large input 100E3 items', () => {
      solveFish(generateArray(100e3), generateArray(100e3));
    }, 100);
  });
});
