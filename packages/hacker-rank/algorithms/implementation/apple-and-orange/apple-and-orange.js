/**
 * @url: https://www.hackerrank.com/challenges/apple-and-orange/problem
 */

function between(s, t) {
  return x => x >= s && x <= t;
}

function sumCurry(n) {
  return x => n + x;
}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Complete this function
  const betweenHouse = between(s, t);

  const nbApple = apples.map(sumCurry(a)).filter(betweenHouse).length;

  const nbOrange = oranges.map(sumCurry(b)).filter(betweenHouse).length;

  return [nbApple, nbOrange];
}

export { countApplesAndOranges };
