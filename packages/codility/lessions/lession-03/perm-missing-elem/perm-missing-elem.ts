/**
 */

function solvePermMissingElem(a: number[]): number {
  function add(a: number, b: number): number {
    return a + b;
  }

  let n = a.length;
  let sumArray = a.reduce(add, 0);
  let sumAllArray = (n + 2) * (n + 1) / 2;

  return sumAllArray - sumArray;
}

export { solvePermMissingElem };
