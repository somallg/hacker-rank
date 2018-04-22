/**
 */

function solveMissingInteger(array: number[]): number {
  const set = new Set(array);
  let result = 1;

  while (true) {
    if (set.has(result)) {
      result++;
    } else {
      return result;
    }
  }
}

export { solveMissingInteger };
