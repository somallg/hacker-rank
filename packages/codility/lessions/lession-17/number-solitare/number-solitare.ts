/**
 * Codility - NumberSolitare
 */

function solution(arr: number[]): number {
  const n: number = arr.length;
  const [first]: number[] = arr;
  const dp: number[] = [first].concat(Array(n - 1).fill(-Infinity));

  for (let i: number = 1; i < n; i = i + 1) {
    let max: number = dp[i - 1];
    let j: number = 1;

    while (j <= 6 && i - j >= 0) {
      max = Math.max(dp[i - j], max);
      j = j + 1;
    }
    dp[i] = max + arr[i];
  }

  return dp[n - 1];
}

export { solution };
