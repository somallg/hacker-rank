/**
 * Interviewbit - LengthOfLongestSubsequence
 */

function longestSubsequenceEndingAt(array: number[]): number[] {
  const n: number = array.length;

  const dp: number[] = Array(n).fill(0);
  dp[0] = 1;

  for (let i: number = 1; i < n; i = i + 1) {
    let max: number = 0;
    for (let j: number = i - 1; j >= 0; j = j - 1) {
      if (array[j] < array[i] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
  }

  return dp;
}

function longestSubsequenceStartingAt(array: number[]): number[] {
  const n: number = array.length;

  const dp: number[] = Array(n).fill(0);
  dp[n - 1] = 1;

  for (let i: number = n - 2; i >= 0; i = i - 1) {
    let max: number = 0;
    for (let j: number = i + 1; j < n; j = j + 1) {
      if (array[j] < array[i] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
  }

  return dp;
}

function solveLengthOfLongestSubsequence(array: number[]): number {
  let result: number = 0;
  const inc: number[] = longestSubsequenceEndingAt(array);
  const dec: number[] = longestSubsequenceStartingAt(array);

  for (let i: number = 0; i < array.length; i = i + 1) {
    result = Math.max(result, inc[i] + dec[i] - 1);
  }

  return result;
}

export {
  solveLengthOfLongestSubsequence,
  longestSubsequenceEndingAt,
  longestSubsequenceStartingAt
};
