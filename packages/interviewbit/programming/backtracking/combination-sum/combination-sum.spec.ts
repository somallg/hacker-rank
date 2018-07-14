/**
 * Test specs for combination-sum problem
 * Interviewbit - CombinationSum
 */

import { generateArray } from '@challenges/util';

import { combinationSum } from './combination-sum';

describe('Interviewbit - CombinationSum', () => {
  describe('combinationSum', () => {
    describe('Example tests', () => {
      it('should return for Example 1 input [2, 3, 6, 7] 7', () => {
        expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]]);
      });

      it('should return for Example 2 input [8, 10, 6, 11, 1, 16, 8] 28', () => {
        expect(combinationSum([8, 10, 6, 11, 1, 16, 8], 28)).toEqual([
          // prettier-ignore
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 8],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 10],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 11],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 10],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 11],
          [1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 8],
          [1, 1, 1, 1, 1, 1, 1, 1, 10, 10],
          [1, 1, 1, 1, 1, 1, 1, 10, 11],
          [1, 1, 1, 1, 1, 1, 6, 6, 10],
          [1, 1, 1, 1, 1, 1, 6, 8, 8],
          [1, 1, 1, 1, 1, 1, 6, 16],
          [1, 1, 1, 1, 1, 1, 11, 11],
          [1, 1, 1, 1, 1, 6, 6, 11],
          [1, 1, 1, 1, 6, 6, 6, 6],
          [1, 1, 1, 1, 6, 8, 10],
          [1, 1, 1, 1, 8, 8, 8],
          [1, 1, 1, 1, 8, 16],
          [1, 1, 1, 6, 8, 11],
          [1, 1, 6, 6, 6, 8],
          [1, 1, 6, 10, 10],
          [1, 1, 8, 8, 10],
          [1, 1, 10, 16],
          [1, 6, 10, 11],
          [1, 8, 8, 11],
          [1, 11, 16],
          [6, 6, 6, 10],
          [6, 6, 8, 8],
          [6, 6, 16],
          [6, 11, 11],
          [8, 10, 10]
        ]);
      });
    });

    describe('Correctness tests', () => {
      it('should return for Sample 1 input [1, 2, 3, 4] 5', () => {
        expect(combinationSum([1, 2, 3, 4], 5)).toEqual([
          [1, 1, 1, 1, 1],
          [1, 1, 1, 2],
          [1, 1, 3],
          [1, 2, 2],
          [1, 4],
          [2, 3]
        ]);
      });

      it('should return for Extreme 1 input [] 7', () => {
        expect(combinationSum([], 7)).toEqual([]);
      });

      it('should return for Extreme 2 input [1, 2, 3, 4] 0', () => {
        expect(combinationSum([1, 2, 3, 4], 0)).toEqual([]);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 10 items', () => {
        combinationSum(generateArray(10, 10, 1), 100);
      });
    });
  });
});
