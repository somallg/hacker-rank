/**
 * @url https://www.hackerrank.com/challenges/the-hurdle-race/problem
 */

export function solveTheHurdleRace(k: number, h: number[]) {
  const maxStep = h.filter(e => e > k).reduce((a, b) => (a > b ? a : b), -1);
  return maxStep === -1 ? 0 : maxStep - k;
}
