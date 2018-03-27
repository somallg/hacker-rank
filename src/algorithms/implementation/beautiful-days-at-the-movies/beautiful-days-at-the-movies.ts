/**
 * @url https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
 */

export function reversed(x: number): number {
  let y = 0;
  let div = x;

  while (x > 0) {
    y = y * 10 + div % 10;
    div = Math.floor(div / 10);
  }

  return y;
}

export function solveBeautifulDaysAtTheMovies(
  i: number,
  j: number,
  k: number
): number {
  const res = [];
  for (let x = i; x <= j; x = x + 1) {
    if (Math.abs(x - reversed(x)) % k === 0) {
      res.push(x);
    }
  }

  return res.length;
}
