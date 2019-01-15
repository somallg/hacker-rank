/**
 * Interviewbit - KthRowOfPascalsTriangle
 */

function kthRowOfPascalsTriangle(k: number): number[] {
  let dp1: number[] = [1];
  let dp2: number[] = [1];

  for (let i: number = 0; i < k; i = i + 1) {
    for (let j: number = 1; j <= dp1.length; j = j + 1) {
      dp2[j] = j === dp1.length ? 1 : dp1[j] + dp1[j - 1];
    }
    [dp1, dp2] = [dp2, dp1];
  }

  return dp1;
}

export { kthRowOfPascalsTriangle };
