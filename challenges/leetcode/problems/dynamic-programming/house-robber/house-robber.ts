/**
 * Leetcode - HouseRobber Recursive approach
 * recurisve formula:
 * f(0) = array[0]
 * f(1) = Math.max(array[0], array[1])
 * f(i) = Math.max(array[i] + f(i - 2), f(i - 1))
 */
import { memorized } from '@challenges/util';

function houseRobber(array: number[]): number {
  const n = array.length;

  const houseRobberMemo = memorized(
    (index: number): number => {
      if (index < 0) {
        return 0;
      }

      if (index === 0) {
        return array[0];
      }

      if (index === 1) {
        return Math.max(array[0], array[1]);
      }

      return Math.max(
        array[index] + houseRobberMemo(index - 2),
        houseRobberMemo(index - 1)
      );
    }
  );

  return houseRobberMemo(n - 1);
}

export { houseRobber };
