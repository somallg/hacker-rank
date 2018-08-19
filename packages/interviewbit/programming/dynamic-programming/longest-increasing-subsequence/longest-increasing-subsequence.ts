/**
 * LongestIncreasingSubsequence
 */

function longestIncreasingSubsequence(array: number[]): number {
  const l = array.length;
  const dp = Array<number>(l).fill(1);

  for (let i = 1; i < array.length; i += 1) {
    let max = 0;
    for (let j = 0; j < i; j += 1) {
      if (max < dp[j] && array[j] < array[i]) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
  }

  return dp.reduce((acc, d) => Math.max(acc, d), 0);
}

export { longestIncreasingSubsequence };
