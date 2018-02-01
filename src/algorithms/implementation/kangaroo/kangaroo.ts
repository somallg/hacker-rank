/**
 * @url https://www.hackerrank.com/challenges/kangaroo/problem
 */
export function kangaroo(x1: number, v1: number, x2: number, v2: number) {
  // Let i the number of steps, then we have this equation
  // x1 + i * v1 = x2 + i * v2;
  // i = (x2 - x1) / (v1 - v2)

  const i: number = (x2 - x1) / (v1 - v2);

  return i < 0 || !Number.isInteger(i) ? 'NO' : 'YES';
}
