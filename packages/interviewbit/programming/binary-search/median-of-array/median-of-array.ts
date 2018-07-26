/**
 * MedianOfArray
 */

function medianOfArray(a: number[], b: number[]): number {
  let m = a.length;
  let n = b.length;
  if (m > n) {
    [n, m] = [m, n];
    [a, b] = [b, a];
  }

  // tslint:disable:no-bitwise
  const middle = (m + n + 1) >>> 1;

  let iStart = 0;
  let iEnd = m;

  while (iStart <= iEnd) {
    const i = (iStart + iEnd) >>> 1;
    const j = middle - i;
    if (j > 0 && i < m && a[i] < b[j - 1]) {
      iStart = i + 1;
    } else if (i > 0 && j < n && a[i - 1] > b[j]) {
      iEnd = i - 1;
    } else {
      let median1 = 0;
      let median2 = 0;
      if (i === 0) {
        median1 = b[j - 1];
      } else if (j === 0) {
        median1 = a[i - 1];
      } else {
        median1 = Math.max(a[i - 1], b[j - 1]);
      }

      if ((m + n) % 2 === 1) {
        return median1;
      }

      if (i === m) {
        median2 = b[j];
      } else if (j === n) {
        median2 = a[i];
      } else {
        median2 = Math.min(a[i], b[j]);
      }

      return (median1 + median2) / 2;
    }
  }

  return 0;
}

export { medianOfArray };
