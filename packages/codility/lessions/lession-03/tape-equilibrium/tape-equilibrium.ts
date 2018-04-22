function solveTapeEquilibrium(a: number[]): number {
  function add(a: number, b: number): number {
    return a + b;
  }

  function liftf(fn: Function, value: number): Function {
    return function(n: number): number {
      value = fn(value, n);
      return value;
    };
  }

  const sumA = a.reduce(add, 0);
  const addf = liftf(add, 0);

  return a
    .slice(0, a.length - 1)
    .map(e => addf(e))
    .map(e => sumA - 2 * e)
    .map(Math.abs)
    .reduce((a, b) => Math.min(a, b));
}

export { solveTapeEquilibrium };
