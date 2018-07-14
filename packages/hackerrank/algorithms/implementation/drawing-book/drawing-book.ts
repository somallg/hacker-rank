/**
 * @url https://www.hackerrank.com/challenges/drawing-book/problem
 */

export function solveDrawingBook(n: number, p: number): number {
  // start from beginning
  const nbFromBeginning: number = Math.ceil((p - 1) / 2);
  const nbFromEnd: number =
    n - p === 1 && n % 2 === 0 ? 1 : Math.floor((n - p) / 2);

  return Math.min(nbFromBeginning, nbFromEnd);
}
