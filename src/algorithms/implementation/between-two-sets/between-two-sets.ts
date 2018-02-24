/**
 * @url https://www.hackerrank.com/challenges/between-two-sets/problem
 */

export function getTotalX(a: number[], b: number[]): number {
  // Complete this function
  const maxA: number = Math.max.apply(null, a);
  const minB: number = Math.min.apply(null, b);

  if (minB < maxA) {
    return 0;
  }

  return Array.apply(null, { length: minB - maxA + 1 })
    .map((_: number, i: number) => i + maxA)
    .filter(
      (e: number) =>
        a.every((eleA: number) => e % eleA === 0) &&
        b.every((eleB: number) => eleB % e === 0)
    ).length;
}
