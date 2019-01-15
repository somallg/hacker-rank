/**
 * LongestIncreasingSubsequence
 */

function longestIncreasingSubsequence(array: number[]): number {
  const l: number = array.length;
  const dp: number[] = Array<number>(l).fill(1);

  for (let i: number = 1; i < array.length; i += 1) {
    let max: number = 0;
    for (let j: number = 0; j < i; j += 1) {
      if (max < dp[j] && array[j] < array[i]) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
  }

  return dp.reduce((acc: number, d: number) => Math.max(acc, d), 0);
}

export { longestIncreasingSubsequence };
