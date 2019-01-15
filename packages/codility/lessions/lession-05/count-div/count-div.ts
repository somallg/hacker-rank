/**
 */

function solveCountDiv(fromN: number, toN: number, k: number): number {
  const countDivFrom: number = countDiv(fromN, k);
  const countDivTo: number = countDiv(toN, k);
  const diff: number = countDivTo - countDivFrom;

  return countDivFrom * k === fromN ? diff + 1 : diff;
}

function countDiv(fromN: number, k: number): number {
  return Math.floor(fromN / k);
}

export { solveCountDiv };
