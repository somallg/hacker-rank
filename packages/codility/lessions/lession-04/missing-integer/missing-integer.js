/**
 * @url https://www.hackerrank.com/challenges/missing-integer/problem
 */

function solveMissingInteger(array) {
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
