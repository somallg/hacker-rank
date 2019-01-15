/**
 * Codility - CountNonDivisible
 */

function increaseMapValueBy(
  map: Map<number, number>,
  key: number,
  byValue: number = 1
): Map<number, number> {
  const [previousValue = 0]: [(number | undefined)] = [map.get(key)];

  map.set(key, previousValue + byValue);

  return map;
}

function buildSieve(n: number, occ: Map<number, number>): Map<number, number> {
  let result: Map<number, number> = new Map<number, number>();

  occ.forEach((occurence: number, num: number) => {
    for (let k: number = num; k <= n; k = k + num) {
      result = increaseMapValueBy(result, k, occurence);
    }
  });

  return result;
}

function solution(arr: number[]): number[] {
  const n: number = arr.reduce((max: number, e: number) => Math.max(max, e));

  let occurrence: Map<number, number> = new Map<number, number>();

  arr.forEach((e: number) => {
    occurrence = increaseMapValueBy(occurrence, e);
  });

  const sieve: Map<number, number> = buildSieve(n, occurrence);

  return arr.map((e: number) => arr.length - (sieve.get(e) || 0));
}

export { solution };
