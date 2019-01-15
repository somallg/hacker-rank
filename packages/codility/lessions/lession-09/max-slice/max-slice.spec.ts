/**
 * Test specs for max-slice problem
 */

import { generateArray } from '@challenges/util';

import { solveMaxSlice } from './max-slice';

describe('MaxSlice', () => {
  describe('solveMaxSlice', () => {
    it('should return for Extreme Simple input [1]', () => {
      expect(solveMaxSlice([1])).toEqual(1);
    });

    it('should return for Duplicates input [2, 2]', () => {
      expect(solveMaxSlice([2, 2])).toEqual(4);
    });

    it('should return for Extreme Double input [2, -1]', () => {
      expect(solveMaxSlice([2, -1])).toEqual(2);
    });

    it('should return for No Intersections input [0, 0]', () => {
      expect(solveMaxSlice([0, 0])).toEqual(0);
    });

    it('should return 10 for Example input [5, -7, 3, 5, -2, 4, -10, 11]', () => {
      expect(solveMaxSlice([5, -7, 3, 5, -2, 4, -10, 11])).toEqual(11);
    });

    it('should return 1 for Sample input [-1, -2, -3, -4, 1]', () => {
      expect(solveMaxSlice([-1, -2, -3, -4, 1])).toEqual(1);
    });

    it('should run for Large input 50E3 items', () => {
      solveMaxSlice(generateArray(50e3));
    }, 100);

    it('should run for Extra Large input 100E3 items', () => {
      solveMaxSlice(generateArray(100e3));
    }, 100);
  });
});
