/**
 * Leetcode - MinCostClimbingStairs recursive version
 */

import { memorized } from '@challenges/util';

function minCostClimbingStairsRec(cost: number[]): number {
  const n = cost.length;

  const minCostClimbingStairsMemo = memorized(
    (currentStep: number): number => {
      if (currentStep < 0) {
        return 0;
      }

      const currentCost = currentStep >= n ? 0 : cost[currentStep];
      const nextOneStepCost =
        currentCost + minCostClimbingStairsMemo(currentStep - 1);
      const nextTwoStepCost =
        currentCost + minCostClimbingStairsMemo(currentStep - 2);

      return Math.min(nextOneStepCost, nextTwoStepCost);
    }
  );

  return minCostClimbingStairsMemo(n);
}

export { minCostClimbingStairsRec };
