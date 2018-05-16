/**
 */

function solveMissingInteger(array: number[]): number {
  const set = new Set(array);
  let result = 1;

  while (true) {
    if (set.has(result)) {
      result = result + 1;
    } else {
      return result;
    }
  }
}

export { solveMissingInteger };
