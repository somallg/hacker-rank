/**
 */

function solveMissingInteger(array: number[]): number {
  const mySet: Set<number> = new Set<number>(array);
  let result: number = 1;

  // tslint:disable-next-line
  while (true) {
    if (mySet.has(result)) {
      result = result + 1;
    } else {
      return result;
    }
  }
}

export { solveMissingInteger };
