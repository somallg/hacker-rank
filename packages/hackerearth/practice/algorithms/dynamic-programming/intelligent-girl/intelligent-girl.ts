/**
 * HackerEarth - IntelligentGirl
 */

function solveIntelligentGirl(array: number[]): number[] {
  const n = array.length;
  const dp: number[] = Array(n).fill(0);

  dp[n - 1] = array[n - 1] % 2 === 0 ? 1 : 0;

  for (let i = n - 2; i >= 0; i = i - 1) {
    dp[i] = array[i] % 2 === 0 ? 1 + dp[i + 1] : dp[i + 1];
  }

  return dp;
}

export { solveIntelligentGirl };
