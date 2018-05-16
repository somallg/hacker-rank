/**
 */

function solvePermCheck(a: number[]): number {
  const n = a.length;

  const tmp = Array(n).fill(0);
  // tslint:disable:no-increment-decrement
  return tmp.map((_, i) => ++tmp[a[i] - 1]).every(e => e === 1) ? 1 : 0;
}

export { solvePermCheck };
