/**
 */

function solvePermCheck(a: number[]): number {
  const n: number = a.length;
  const tmp: number[] = Array(n).fill(0);

  // tslint:disable-next-line
  return (
    tmp
      // tslint:disable-next-line
      .map((_: number, i: number) => ++tmp[a[i] - 1])
      .every((e: number) => e === 1)
      ? 1
      : 0
  );
}

export { solvePermCheck };
