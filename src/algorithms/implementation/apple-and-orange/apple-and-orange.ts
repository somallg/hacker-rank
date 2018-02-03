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
) {
  // Complete this function
  const betweenHouse = between(s, t);

  const nbApple = apples.map(sumCurry(a)).filter(betweenHouse).length;

  const nbOrange = oranges.map(sumCurry(b)).filter(betweenHouse).length;

  return [nbApple, nbOrange];
}

function between(s: number, t: number) {
  return (x: number) => x >= s && x <= t;
}

function sumCurry(n: number) {
  return (x: number) => n + x;
}
