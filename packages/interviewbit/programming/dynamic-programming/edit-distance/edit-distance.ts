/**
 * EditDistance
 */

function editDistance(a: string, b: string): number {
  const m: number = a.length;
  const n: number = b.length;
  const dp: number[][] = [];
  for (let i: number = 0; i <= m; i += 1) {
    dp[i] = [];
  }

  for (let i: number = 0; i <= m; i += 1) {
    for (let j: number = 0; j <= n; j += 1) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (j === 0) {
        dp[i][j] = i;
      } else if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  return dp[m][n];
}

export { editDistance };
