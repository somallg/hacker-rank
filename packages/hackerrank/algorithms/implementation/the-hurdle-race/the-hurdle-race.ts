/**
 * @url https://www.hackerrank.com/challenges/the-hurdle-race/problem
 */

export function solveTheHurdleRace(k: number, h: number[]): number {
  const maxStep: number = h
    .filter((e: number) => e > k)
    .reduce((a: number, b: number) => (a > b ? a : b), -1);

  return maxStep === -1 ? 0 : maxStep - k;
}
