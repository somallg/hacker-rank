export function solveTapeEquilibrium(a) {
  function add(a, b) {
    return a + b;
  }

  function liftf(fn, value) {
    return function(n) {
      value = fn(value, n);
      return value;
    };
  }

  const sumA = a.reduce(add, 0);
  const addf = liftf(add, 0);

  return a
    .slice(0, a.length - 1)
    .map(addf)
    .map(e => sumA - 2 * e)
    .map(Math.abs)
    .reduce((a, b) => Math.min(a, b));
}
