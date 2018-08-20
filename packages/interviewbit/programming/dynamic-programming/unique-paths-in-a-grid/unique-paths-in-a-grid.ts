/**
 * UniquePathsInAGrid
 */

function uniquePathsInAGrid(matrix: number[][]): number {
  const m = matrix.length;
  if (m === 0) {
    return 0;
  }
  const n = matrix[0].length;
  if (n === 0) {
    return 0;
  }

  const dp: number[][] = [];

  for (let i = 0; i < m; i += 1) {
    dp[i] = [];
    for (let j = 0; j < n; j += 1) {
      dp[i][j] = matrix[i][j] === 1 ? 0 : 1;
    }
  }
  // special case border i = 0 and j = 0
  for (let j = 1; j < n; j += 1) {
    dp[0][j] = matrix[0][j] === 1 ? 0 : dp[0][j - 1];
  }

  for (let i = 1; i < m; i += 1) {
    dp[i][0] = matrix[i][0] === 1 ? 0 : dp[i - 1][0];
  }

  for (let i = 1; i < m; i += 1) {
    for (let j = 1; j < n; j += 1) {
      if (matrix[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
}

export { uniquePathsInAGrid };
