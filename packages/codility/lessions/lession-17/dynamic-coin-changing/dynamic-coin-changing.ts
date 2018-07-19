/**
 * Codility - DynamicCoinChanging
 */

function solution(arr: number[], k: number): number {
  const n = arr.length;

  const dp: number[] = [0].concat(Array(k).fill(Infinity));

  for (let i = 1; i < n + 1; i = i + 1) {
    const maxCoin = arr[i - 1]; // maxCoin 1, 3, 4
    for (let j = maxCoin; j < k + 1; j = j + 1) {
      dp[j] = Math.min(dp[j - maxCoin] + 1, dp[j]);
    }
  }

  return dp[k];
}

export { solution };
