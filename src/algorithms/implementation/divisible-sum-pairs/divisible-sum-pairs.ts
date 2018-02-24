/**
 * @url https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
 */

export function divisibleSumPairs(_: number, k: number, ar: number[]): number {
  // Complete this function
  return ar
    .reduce((acc: number[][], ai: number, i: number) => {
      ar
        .filter((_: number, j: number) => j > i)
        .forEach((aj: number) => acc.push([ai, aj]));

      return acc;
    }, [])
    .filter((p: number[]) => (p[0] + p[1]) % k === 0).length;
}
