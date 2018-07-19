/**
 * @url https://www.hackerrank.com/challenges/bon-appetit/problem
 */

function sum(a, b) {
  return a + b;
}

function solveBonAppetit(_, k, c, b) {
  const sharedAmount = (c.reduce(sum) - c[k]) / 2;
  const overChargedAmount = b - sharedAmount;

  return overChargedAmount > 0 ? `${overChargedAmount}` : 'Bon Appetit';
}

export { solveBonAppetit };
