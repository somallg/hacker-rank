export function solveTapeEquilibrium(a: number[]): number {
  function add(a, b) {
    return a + b;
  }

  function liftf(fn, value) {
    return function (n) {
      value = fn(value, n);
      return value;
    };
  }

  let sumA = a.reduce(add, 0);
  let addf = liftf(add, 0);

  return a
    .slice(0, a.length - 1)
    .map(addf)
    .map(e => sumA - 2 * e)
    .map(Math.abs)
    .reduce((a, b) => Math.min(a, b));
}
