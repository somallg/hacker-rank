/**
 * Leetcode - ClimbingStairs
 */

function climbingStairs(step: number): number {
  const dp: number[] = [1, 2];

  for (let i = 2; i < step; i = i + 1) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[step - 1];
}

export { climbingStairs };
