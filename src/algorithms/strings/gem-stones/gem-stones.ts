/**
 * @url https://www.hackerrank.com/challenges/gem-stones/problem
 */

export function gemstones(arr: string[]): number {
  const gems = arr.reduce((acc: any, e: string) => {
    const check = {} as any;
    e.split('').forEach((g: string) => {
      if (!check[g]) {
        acc[g] = acc[g] ? acc[g] + 1 : 1;
      }
      check[g] = true;
    });
    return acc;
  }, {} as any);

  return Object.keys(gems).filter(gem => gems[gem] === arr.length).length;
}
