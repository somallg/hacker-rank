/**
 * @url https://www.hackerrank.com/challenges/grading/problem
 */
export function solve(grades: number[]) {
  return grades.map((e: number) => {
    if (e < 38) {
      return e;
    }

    const nextMultiOf5: number = getNextMultiOf5(e);

    return e <= nextMultiOf5 - 3 ? e : nextMultiOf5;
  });
}

export function getNextMultiOf5(n: number) {
  return Math.floor((n + 5) / 5) * 5;
}
