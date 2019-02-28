/**
 * Next Number Problem
 */

function nextNumber(n: number): number[] {
  return [getNext(n), getPrev(n)];
}

function getNext(n: number): number {
  let c: number = n;
  let p: number = 0;
  let c0: number = 0;
  let c1: number = 0;

  while (c > 0 && (c & 1) === 0) {
    c0 += 1;
    c >>= 1;
  }

  while (c > 0 && (c & 1) === 1) {
    c1 += 1;
    // tslint:disable-next-line
    c >>= 1;
  }

  p = c0 + c1;

  if (p === 31 || p === 0) {
    return -1;
  }

  return n + (1 << c0) + (1 << (c1 - 1)) - 1;
}

function getPrev(n: number): number {
  let c: number = n;
  let c1: number = 0;
  let c0: number = 0;

  while (c > 0 && (c & 1) === 1) {
    c1 += 1;
    c >>= 1;
  }

  while (c > 0 && (c & 1) === 0) {
    c0 += 1;
    c >>= 1;
  }

  return n - (1 << c1) - (1 << (c0 - 1)) + 1;
}

export { nextNumber };
