/**
 * Test specs for min-cost-climbing-stairs problem
 * Leetcode - MinCostClimbingStairs
 */

import { generateArray } from '@challenges/util';

import { minCostClimbingStairsRec } from './min-cost-climbing-stairs-rec';

describe('Leetcode - MinCostClimbingStairs', () => {
  describe('minCostClimbingStairsRec', () => {
    describe('Example tests', () => {
      it('should return 15 for Example 1 input [10, 15, 20]', () => {
        expect(minCostClimbingStairsRec([10, 15, 20])).toEqual(15);
      });

      it('should return 6 for Example 2 input [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]', () => {
        expect(
          minCostClimbingStairsRec([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])
        ).toEqual(6);
      });
    });

    describe('Correctness tests', () => {
      it('should return 4 for Sample 1 input [1, 2, 3, 4]', () => {
        expect(minCostClimbingStairsRec([1, 2, 3, 4])).toEqual(4);
      });

      it('should return 4 for Sample 2 input [4, 3, 2, 1]', () => {
        expect(minCostClimbingStairsRec([4, 3, 2, 1])).toEqual(4);
      });

      it('should return 0 for Extreme input [0, 0]', () => {
        expect(minCostClimbingStairsRec([0, 0])).toEqual(0);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        minCostClimbingStairsRec(generateArray(100, 1e3));
      });

      it('should run for Large 1 input of 1e3 items', () => {
        minCostClimbingStairsRec(generateArray(1e3, 1e3));
      });
    });
  });
});
