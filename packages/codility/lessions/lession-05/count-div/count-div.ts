/**
 */

function solveCountDiv(from: number, to: number, k: number): number {
  const countDivFrom = countDiv(from, k);
  const countDivTo = countDiv(to, k);
  const diff = countDivTo - countDivFrom;

  return countDivFrom * k === from ? diff + 1 : diff;
}

function countDiv(from: number, k: number): number {
  return Math.floor(from / k);
}

export { solveCountDiv };
