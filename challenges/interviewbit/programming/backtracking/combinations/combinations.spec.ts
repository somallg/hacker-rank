/**
 * Test specs for combinations problem
 * Interviewbit - Combinations
 */

import { combinations } from './combinations';

describe('Interviewbit - Combinations', () => {
  describe('combinations', () => {
    describe('Example tests', () => {
      it('should return for Example 1 input 4 2', () => {
        expect(combinations(4, 2)).toEqual([
          [1, 2],
          [1, 3],
          [1, 4],
          [2, 3],
          [2, 4],
          [3, 4]
        ]);
      });
    });

    describe('Correctness tests', () => {
      it('should return for Sample 1 input 4 1', () => {
        expect(combinations(4, 1)).toEqual([[1], [2], [3], [4]]);
      });

      it('should return [] for Extreme 1 input 0 0', () => {
        expect(combinations(0, 0)).toEqual([]);
      });

      it('should return [] for Extreme 1 input 3 4', () => {
        expect(combinations(3, 4)).toEqual([]);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 10 items', () => {
        combinations(10, 5);
      });
    });
  });
});
