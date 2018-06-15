/**
 * Leetcode - MinCostClimbingStairs
 */

import { memorized } from '@challenges/util';

function minCostClimbingStairs(cost: number[]): number {
  const minCostClimbingStairsRec = memorized(
    (currentStep: number): number => {
      const n = cost.length;
      if (currentStep >= n) {
        return 0;
      }

      const currentCost = currentStep < 0 ? 0 : cost[currentStep];
      const nextOneStepCost =
        currentCost + minCostClimbingStairsRec(currentStep + 1);
      const nextTwoStepCost =
        currentCost + minCostClimbingStairsRec(currentStep + 2);

      return Math.min(nextOneStepCost, nextTwoStepCost);
    }
  );

  return minCostClimbingStairsRec(-1);
}

export { minCostClimbingStairs };
