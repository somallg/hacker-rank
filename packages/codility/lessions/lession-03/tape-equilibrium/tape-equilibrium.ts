function solveTapeEquilibrium(a: number[]): number {
  // tslint:disable-next-line
  function add(a: number, b: number): number {
    return a + b;
  }

  function liftf(
    fn: (value: number, n: number) => number,
    value: number
  ): (n: number) => number {
    return (n: number): number => {
      // tslint:disable:no-parameter-reassignment
      value = fn(value, n);

      return value;
    };
  }

  const sumA: number = a.reduce(add, 0);
  const addf: (n: number) => number = liftf(add, 0);

  return a
    .slice(0, a.length - 1)
    .map(addf)
    .map((e: number) => sumA - e * 2)
    .map(Math.abs)
    .reduce((acc: number, e: number) => Math.min(acc, e));
}

export { solveTapeEquilibrium };
