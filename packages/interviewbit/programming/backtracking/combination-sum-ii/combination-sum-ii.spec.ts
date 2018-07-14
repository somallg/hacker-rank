/**
 * Test specs for combination-sum-ii problem
 * Interviewbit - CombinationSumIi
 */

import { generateArray } from '@challenges/util';

import { combinationSumIi } from './combination-sum-ii';

describe('Interviewbit - CombinationSumIi', () => {
  describe('combinationSumIi', () => {
    describe('Example tests', () => {
      it('should return for Example 1 input [10, 1, 2, 7, 6, 1, 5] 8', () => {
        expect(combinationSumIi([10, 1, 2, 7, 6, 1, 5], 8)).toEqual([
          [1, 1, 6],
          [1, 2, 5],
          [1, 7],
          [2, 6]
        ]);
      });

      it('should return for Example 2 input [8, 10, 6, 11, 1, 16, 8] 28', () => {
        expect(combinationSumIi([8, 10, 6, 11, 1, 16, 8], 28)).toEqual([
          [1, 6, 10, 11],
          [1, 8, 8, 11],
          [1, 11, 16]
        ]);
      });
    });

    describe('Correctness tests', () => {
      it('should return for Sample 1 input [1, 2, 3, 4] 5', () => {
        expect(combinationSumIi([1, 2, 3, 4], 5)).toEqual([[1, 4], [2, 3]]);
      });

      it('should return for Sample 2 input [4, 3, 2, 1]', () => {
        expect(combinationSumIi([4, 3, 2, 1], 5)).toEqual([[1, 4], [2, 3]]);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        combinationSumIi(generateArray(100, 100, 1), 100);
      });
    });
  });
});
