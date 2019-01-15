/**
 * Codility - DynamicFrogJump
 */

function solution(S: number[], k: number, q: number): number {
  const n: number = S.length;
  const dp: number[] = [1].concat(Array(k).fill(0));

  for (let j: number = 1; j < k + 1; j = j + 1) {
    for (let i: number = 0; i < n; i = i + 1) {
      if (S[i] <= j) {
        dp[j] = (dp[j] + dp[j - S[i]]) % q;
      }
    }
  }

  return dp[k];
}

export { solution };
