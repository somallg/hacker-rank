/**
 */

function solvePermMissingElem(a: number[]): number {
  function add(a: number, b: number): number {
    return a + b;
  }

  const n = a.length;
  const sumArray = a.reduce(add, 0);
  const sumAllArray = (n + 2) * (n + 1) / 2;

  return sumAllArray - sumArray;
}

export { solvePermMissingElem };
