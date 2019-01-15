/**
 * @url https://www.hackerrank.com/challenges/find-digits/problem
 */

function toDigits(num: number): number[] {
  if (num < 10) {
    return [num];
  }

  return [...toDigits(Math.floor(num / 10)), num % 10];
}

function solveFindDigits(num: number): number {
  return toDigits(num).filter((n: number) => num % n === 0).length;
}

export { toDigits, solveFindDigits };
