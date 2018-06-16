/**
 * Leetcode - HouseRobber bottom up approach
 * recurisve formula:
 * f(0) = array[0]
 * f(1) = Math.max(array[0], array[1])
 * f(i) = Math.max(array[i] + f(i - 2), f(i - 1))
 */

function houseRobber(array: number[]): number {
  const n = array.length;

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return array[0];
  }

  if (n === 2) {
    return Math.max(array[0], array[1]);
  }

  const dp: number[] = [array[0], Math.max(array[0], array[1])];

  for (let i = 2; i < n; i = i + 1) {
    dp[i] = Math.max(array[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[n - 1];
}

export { houseRobber };
