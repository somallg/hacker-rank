/**
 * GridUniquePaths
 */

// Math way: uniq paths = combinatoric(row + col - 2, row - 1)
// function combinatoric(n: number, k: number): number {
//   let result = 1;

//   for (let i = 0; i < n; i = i + 1) {
//     result = (result * (n - i)) / (Math.max(1, k - i) * Math.max(1, n - k - i));
//   }

//   return Math.round(result);
// }

function gridUniquePaths(row: number, col: number): number {
  if (row === 0 && col === 0) {
    return 1;
  }

  const dp: number[][] = [];
  for (let i: number = 0; i < row; i = i + 1) {
    dp[i] = Array(col).fill(1);
  }

  for (let i: number = 1; i < row; i = i + 1) {
    for (let j: number = 1; j < col; j = j + 1) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[row - 1][col - 1];
}

export { gridUniquePaths };
