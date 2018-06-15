/**
 * Test specs for min-cost-climbing-stairs problem
 * Leetcode - MinCostClimbingStairs
 */

import { generateArray } from '@challenges/util';

import { minCostClimbingStairs } from './min-cost-climbing-stairs';

describe('Leetcode - MinCostClimbingStairs', () => {
  describe('minCostClimbingStairs', () => {
    describe('Example tests', () => {
      it('should return 15 for Example 1 input [10, 15, 20]', () => {
        expect(minCostClimbingStairs([10, 15, 20])).toEqual(15);
      });

      it('should return 6 for Example 2 input [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]', () => {
        expect(
          minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])
        ).toEqual(6);
      });
    });

    describe('Correctness tests', () => {
      it('should return 4 for Sample 1 input [1, 2, 3, 4]', () => {
        expect(minCostClimbingStairs([1, 2, 3, 4])).toEqual(4);
      });

      it('should return 4 for Sample 2 input [4, 3, 2, 1]', () => {
        expect(minCostClimbingStairs([4, 3, 2, 1])).toEqual(4);
      });

      it('should return 0 for Extreme input [0, 0]', () => {
        expect(minCostClimbingStairs([])).toEqual(0);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        minCostClimbingStairs(generateArray(100, 1e3));
      });

      it('should run for Large 1 input of 1e3 items', () => {
        minCostClimbingStairs(generateArray(1e3, 1e3));
      });
    });
  });
});
