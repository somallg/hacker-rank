/**
 */

function solvePermCheck(a: number[]): number {
  let n = a.length;

  let tmp = Array(n).fill(0);
  return tmp.map((_, i) => ++tmp[a[i] - 1]).every(e => e === 1) ? 1 : 0;
}

export { solvePermCheck };
