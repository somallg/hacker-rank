/**
 * Interviewbit - RotateMatrix
 */

function rotateMatrix(matrix: number[][]): number[][] {
  const n: number = matrix.length;
  for (let i: number = 0; i < n >> 1; i = i + 1) {
    for (let j: number = i; j < n - i - 1; j = j + 1) {
      // do 4 swap operation
      [matrix[j][n - i - 1], matrix[n - i - 1][n - j - 1], matrix[n - j - 1][i], matrix[i][j]] = [
        matrix[i][j],
        matrix[j][n - i - 1],
        matrix[n - i - 1][n - j - 1],
        matrix[n - j - 1][i]
      ];
    }
  }

  return matrix;
}

export { rotateMatrix };
