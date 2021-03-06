/**
 * Leetcode - MaximumSubarray recursive version
 */

import { MemoFn, memorized } from '@challenges/util';

function maximumSubarrayRec(array: number[]): number {
  if (array.length === 0) {
    return 0;
  }

  const maximumSubarrayMemo: MemoFn<number, number> = memorized(
    (endIndex: number): number => {
      if (endIndex < 0) {
        return 0;
      }

      if (endIndex === 0) {
        return array[0];
      }

      const lastMax: number = maximumSubarrayMemo(endIndex - 1);

      return Math.max(lastMax + array[endIndex], array[endIndex]);
    }
  );

  let max: number = array[0];
  for (let i: number = array.length - 1; i >= 0; i = i - 1) {
    max = Math.max(max, maximumSubarrayMemo(i));
  }

  return max;
}

export { maximumSubarrayRec };
