/**
 * Interviewbit - MaxDistance
 */

function maxDistance(array: number[]): number {
  const l: number = array.length;
  if (l === 0) {
    return -1;
  }

  const indexes: number[] = array
    .map((n: number, index: number) => [n, index])
    .sort((a: number[], b: number[]) => a[0] - b[0])
    .map(([, index]: number[]) => index);

  let i: number = 0;
  let result: number = 0;
  while (i < l) {
    let j: number = i + 1;
    while (j < l && indexes[j] >= indexes[i]) {
      j = j + 1;
      result = Math.max(result, indexes[j - 1] - indexes[i]);
    }

    i = j;
  }

  return result;
}

export { maxDistance };
