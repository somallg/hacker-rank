/**
 * Conversion Problem
 */

function conversion(a: number, b: number): number {
  const c: number = a ^ b;

  return getNumberOfOneBit(c);
}

function getNumberOfOneBit(c: number): number {
  let count: number = 0;

  while (c > 0) {
    // tslint:disable-next-line
    c = c & (c - 1);
    count += 1;
  }

  return count;
}

export { conversion };
