/**
 * @url https://www.hackerrank.com/challenges/sock-merchant/problem
 */

export function solveSockMerchant(c: number[]): number {
  const socks: { [key: string]: number } = c.reduce(
    (acc: { [key: string]: number }, e: number) => {
      acc[e] = !acc[e] ? 1 : acc[e] + 1;
      return acc;
    },
    {}
  );

  return Object.keys(socks)
    .map((k: string) => socks[k])
    .filter((s: number) => s > 1)
    .map((s: number) => (s % 2 === 0 ? s / 2 : (s - 1) / 2))
    .reduce((a: number, b: number) => a + b, 0);
}
