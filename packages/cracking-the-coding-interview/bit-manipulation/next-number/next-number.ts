/**
 * NextProblem
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

  // tslint:disable:no-parameter-reassignment
  n |= 1 << p; // set bit 1 at p
  n &= ~((1 << p) - 1); // clear bits on right of p
  n |= (1 << (c1 - 1)) - 1; // move c1 - 1 bit to the right most

  return n;
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

  const p: number = c0 + c1;

  n &= ~0 << (p + 1); // clear bit 0 to p
  n |= ((1 << (c1 + 1)) - 1) << (c0 - 1); // insert c1 - 1 bit 1 ben phai p

  return n;
}

export { nextNumber };
