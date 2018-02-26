/**
 * @url https://www.hackerrank.com/challenges/bon-appetit/problem
 */

export function solveBonAppetit(
  _: number,
  k: number,
  c: number[],
  b: number
): string {
  const sharedAmount: number = (c.reduce(sum) - c[k]) / 2;
  const overChargedAmount: number = b - sharedAmount;

  return overChargedAmount > 0 ? `${overChargedAmount}` : 'Bon Appetit';
}

function sum(a: number, b: number): number {
  return a + b;
}
