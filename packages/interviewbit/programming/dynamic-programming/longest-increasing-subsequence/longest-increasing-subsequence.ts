import { memorized } from '@challenges/util';

/**
 * LongestIncreasingSubsequence
 */

function longestIncreasingSubsequence(array: number[]): number {
  const lisEndAt = memorized<number, number[]>(index => {
    if (index === 0) {
      return [array[0]];
    }

    const candidates: number[][] = [];

    for (let i = index - 1; i >= 0; i -= 1) {
      candidates.push(lisEndAt(i));
    }

    return candidates
      .filter(c => c.length === 0 || c[c.length - 1] < array[index])
      .reduce((acc, c) => {
        return acc.length > c.length ? acc : c;
      }, [])
      .concat(array[index]);
  });

  let result = 0;

  for (let i = 0; i < array.length; i += 1) {
    result = Math.max(result, lisEndAt(i).length);
  }

  return result;
}

export { longestIncreasingSubsequence };
