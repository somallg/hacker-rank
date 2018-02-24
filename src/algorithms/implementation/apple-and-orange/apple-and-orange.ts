/**
 * @url: https://www.hackerrank.com/challenges/apple-and-orange/problem
 */

export function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
): number[] {
  // Complete this function
  const betweenHouse: (x: number) => boolean = between(s, t);

  const nbApple: number = apples.map(sumCurry(a)).filter(betweenHouse).length;

  const nbOrange: number = oranges.map(sumCurry(b)).filter(betweenHouse).length;

  return [nbApple, nbOrange];
}

function between(s: number, t: number): (x: number) => boolean {
  return (x: number): boolean => x >= s && x <= t;
}

function sumCurry(n: number): (x: number) => number {
  return (x: number): number => n + x;
}
