/**
 */

function solvePermMissingElem(a: number[]): number {
  // tslint:disable-next-line
  function add(a: number, b: number): number {
    return a + b;
  }

  const n: number = a.length;
  const sumArray: number = a.reduce(add, 0);
  const sumAllArray: number = ((n + 2) * (n + 1)) / 2;

  return sumAllArray - sumArray;
}

export { solvePermMissingElem };
