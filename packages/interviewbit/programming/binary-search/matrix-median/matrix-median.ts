/**
 * MatrixMedian
 */

function findNumberOfElementLessThan(n: number, matrix: number[][]): number {
  let count: number = 0;

  matrix.forEach((row: number[]) => {
    let start: number = 0;
    let end: number = row.length - 1;

    while (start <= end) {
      // tslint:disable:no-bitwise
      const middle: number = (start + end) >>> 1;

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
  const n: number = matrix.length;
  const m: number = matrix[0].length;
  const maxLowerNumber: number = (n * m - 1) >>> 1;

  let start: number = 0;
  let end: number = matrix
    .map((row: number[]) => row[m - 1])
    .reduce((acc: number, a: number) => Math.max(acc, a));

  while (start <= end) {
    const middle: number = (start + end) >>> 1;
    const numberLessThanMiddle: number = findNumberOfElementLessThan(
      middle,
      matrix
    );

    if (numberLessThanMiddle < maxLowerNumber) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return start;
}

export { matrixMedian };
