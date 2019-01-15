/**
 * Leetcode - MinCostClimbingStairs recursive version
 */

import { memorized } from '@challenges/util';

function minCostClimbingStairsRec(cost: number[]): number {
  const n: number = cost.length;

  const minCostClimbingStairsMemo: MemoFn<number, number> = memorized(
    (currentStep: number): number => {
      if (currentStep < 0) {
        return 0;
      }

      const currentCost: number = currentStep >= n ? 0 : cost[currentStep];
      const nextOneStepCost: number =
        currentCost + minCostClimbingStairsMemo(currentStep - 1);
      const nextTwoStepCost: number =
        currentCost + minCostClimbingStairsMemo(currentStep - 2);

      return Math.min(nextOneStepCost, nextTwoStepCost);
    }
  );

  return minCostClimbingStairsMemo(n);
}

export { minCostClimbingStairsRec };
