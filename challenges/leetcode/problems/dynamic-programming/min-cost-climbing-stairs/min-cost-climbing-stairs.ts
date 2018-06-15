/**
 * Leetcode - MinCostClimbingStairs bottom up version O(n) time complexity
 */

function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;
  const dp = [cost[0], cost[1]];

  for (let i = 2; i < n; i = i + 1) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }

  return Math.min(dp[n - 1], dp[n - 2]);
}

export { minCostClimbingStairs };
