/**
 * Interviewbit - LengthOfLongestSubsequence
 */

function longestSubsequenceEndingAt(array: number[]): number[] {
  const n = array.length;

  const dp: number[] = Array(n).fill(0);
  dp[0] = 1;

  for (let i = 1; i < n; i = i + 1) {
    let max = 0;
    for (let j = i - 1; j >= 0; j = j - 1) {
      if (array[j] < array[i] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
  }

  return dp;
}

function longestSubsequenceStartingAt(array: number[]): number[] {
  const n = array.length;

  const dp: number[] = Array(n).fill(0);
  dp[n - 1] = 1;

  for (let i = n - 2; i >= 0; i = i - 1) {
    let max = 0;
    for (let j = i + 1; j < n; j = j + 1) {
      if (array[j] < array[i] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
  }

  return dp;
}

function solveLengthOfLongestSubsequence(array: number[]): number {
  let result = 0;
  const inc = longestSubsequenceEndingAt(array);
  const dec = longestSubsequenceStartingAt(array);

  for (let i = 0; i < array.length; i = i + 1) {
    result = Math.max(result, inc[i] + dec[i] - 1);
  }

  return result;
}

export {
  solveLengthOfLongestSubsequence,
  longestSubsequenceEndingAt,
  longestSubsequenceStartingAt
};
