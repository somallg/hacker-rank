/**
 * Codility - NumberSolitare
 */

function solution(arr: number[]): number {
  const n = arr.length;
  const [first] = arr;
  const dp = [first].concat(Array(n - 1).fill(-Infinity));

  for (let i = 1; i < n; i = i + 1) {
    let max = dp[i - 1];
    let j = 1;

    while (j <= 6 && i - j >= 0) {
      max = Math.max(dp[i - j], max);
      j = j + 1;
    }
    dp[i] = max + arr[i];
  }

  return dp[n - 1];
}

export { solution };
