/**
 * MatrixMedian
 */

function findNumberOfElementLessThan(n: number, matrix: number[][]): number {
  let count = 0;

  matrix.forEach(row => {
    let start = 0;
    let end = row.length - 1;

    while (start <= end) {
      // tslint:disable:no-bitwise
      const middle = (start + end) >>> 1;

      if (row[middle] <= n) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }

    count = count + start;
  });

  return count - 1;
}

function matrixMedian(matrix: number[][]): number {
  const n = matrix.length;
  const m = matrix[0].length;
  const maxLowerNumber = (n * m - 1) >>> 1;

  let start = 0;
  let end = matrix.map(row => row[m - 1]).reduce((acc, a) => Math.max(acc, a));

  while (start <= end) {
    const middle = (start + end) >>> 1;
    const numberLessThanMiddle = findNumberOfElementLessThan(middle, matrix);

    if (numberLessThanMiddle < maxLowerNumber) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return start;
}

export { matrixMedian };
