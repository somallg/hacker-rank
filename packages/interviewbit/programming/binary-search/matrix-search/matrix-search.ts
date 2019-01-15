/**
 * MatrixSearch
 */

function matrixSearch(matrix: number[][], target: number): number {
  const m: number = matrix.length;
  if (m === 0) {
    return 0;
  }
  const n: number = matrix[0].length;
  let start: number = 0;
  let end: number = m * n - 1;

  while (start <= end) {
    // tslint:disable:no-bitwise
    const middle: number = (start + end) >>> 1;
    const row: number = Math.floor(middle / n);
    const col: number = middle % n;

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
