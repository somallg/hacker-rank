/**
 * PermutationsWithDuplicates
 */

function permutationsWithDuplicates(s: string): string[] {
  const result: string[] = [];

  const freqMap: Map<string, number> = buildFreqMap(s);

  getPerms('', s.length, freqMap, result);

  return result;
}

function buildFreqMap(s: string): Map<string, number> {
  const result: Map<string, number> = new Map();

  for (const c of s) {
    if (result.get(c)) {
      result.set(c, (result.get(c) || 0) + 1);
    } else {
      result.set(c, 1);
    }
  }

  return result;
}

function getPerms(prefix: string, remainder: number, map: Map<string, number>, result: string[]): void {
  if (remainder === 0) {
    result.push(prefix);

    return;
  }

  map.forEach((value: number, key: string): void => {
    if (value > 0) {
      map.set(key, value - 1);

      getPerms(prefix + key, remainder - 1, map, result);

      map.set(key, value);
    }
  });
}

export { permutationsWithDuplicates };
