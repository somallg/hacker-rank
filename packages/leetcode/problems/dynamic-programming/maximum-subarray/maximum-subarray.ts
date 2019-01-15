/**
 * Leetcode - MaximumSubarray bottom up version
 */

function maximumSubarray(array: number[]): number {
  if (array.length === 0) {
    return 0;
  }

  const dp: number[] = [array[0]];

  for (let i: number = 1; i < array.length; i = i + 1) {
    dp[i] = Math.max(dp[i - 1] + array[i], array[i]);
  }

  return dp.reduce((acc: number, e: number) => Math.max(acc, e));
}

export { maximumSubarray };
