/**
 * Codility - CountNonDivisible
 */

function increaseMapValueBy(
  map: Map<number, number>,
  key: number,
  byValue = 1
) {
  const [previousValue = 0] = [map.get(key)];

  map.set(key, previousValue + byValue);

  return map;
}

function buildSieve(n: number, occ: Map<number, number>): Map<number, number> {
  let result = new Map<number, number>();

  occ.forEach((occurence, num) => {
    for (let k = num; k <= n; k = k + num) {
      result = increaseMapValueBy(result, k, occurence);
    }
  });

  return result;
}

function solution(arr: number[]): number[] {
  const n = arr.reduce((max, e) => Math.max(max, e));

  let occurrence = new Map<number, number>();

  arr.forEach(e => {
    occurrence = increaseMapValueBy(occurrence, e);
  });

  const sieve = buildSieve(n, occurrence);

  return arr.map(e => arr.length - (sieve.get(e) || 0));
}

export { solution };
