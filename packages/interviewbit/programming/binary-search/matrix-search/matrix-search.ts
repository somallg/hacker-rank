/**
 * MatrixSearch
 */

function matrixSearch(matrix: number[][], target: number): number {
  const m = matrix.length;
  if (m === 0) {
    return 0;
  }
  const n = matrix[0].length;
  let start = 0;
  let end = m * n - 1;

  while (start <= end) {
    // tslint:disable:no-bitwise
    const middle = (start + end) >>> 1;
    const row = Math.floor(middle / n);
    const col = middle % n;

    if (matrix[row][col] < target) {
      start = middle + 1;
    } else if (matrix[row][col] > target) {
      end = middle - 1;
    } else {
      return 1;
    }
  }

  return 0;
}

export { matrixSearch };
