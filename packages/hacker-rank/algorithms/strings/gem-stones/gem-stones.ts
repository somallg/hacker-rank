/**
 * @url https://www.hackerrank.com/challenges/gem-stones/problem
 */

export function gemstones(arr: string[]): number {
  const gems: { [key: string]: number } = arr.reduce((acc: any, e: string) => {
    const check: { [key: string]: boolean } = {};
    e.split('').forEach((g: string) => {
      if (!check[g]) {
        acc[g] = acc[g] ? acc[g] + 1 : 1;
      }
      check[g] = true;
    });
    return acc;
  }, {});

  return Object.keys(gems).filter((gem: string) => gems[gem] === arr.length)
    .length;
}
