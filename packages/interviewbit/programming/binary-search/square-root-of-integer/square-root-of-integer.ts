/**
 * SquareRootOfInteger
 */

function double(n: number): number {
  return n * n;
}

function squareRootOfInteger(n: number): number {
  let start = 0;
  let end = n;

  while (start < end) {
    // tslint:disable:no-bitwise
    const middle = (start + end) >>> 1;
    if (double(middle) < n) {
      start = middle + 1;
    } else if (double(middle) > n) {
      end = middle - 1;
    } else {
      return middle;
    }
  }

  return double(start) > n ? start - 1 : start;
}

export { squareRootOfInteger };
