/**
 * MinSumPathInMatrix
 */

function setupMatrix(matrix: number[][]): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < matrix.length; i += 1) {
    result[i] = [];
    for (let j = 0; j < matrix[0].length; j += 1) {
      result[i][j] = matrix[i][j];
    }
  }

  // set value for special case
  for (let j = 1; j < matrix[0].length; j += 1) {
    result[0][j] += result[0][j - 1];
  }

  for (let i = 1; i < matrix.length; i += 1) {
    result[i][0] += result[i - 1][0];
  }

  return result;
}

function minSumPathInMatrix(matrix: number[][]): number {
  const m = matrix.length;
  if (m === 0) {
    return 0;
  }
  const n = matrix[0].length;

  const dp = setupMatrix(matrix);

  for (let i = 1; i < m; i += 1) {
    for (let j = 1; j < n; j += 1) {
      dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[m - 1][n - 1];
}

export { minSumPathInMatrix };
