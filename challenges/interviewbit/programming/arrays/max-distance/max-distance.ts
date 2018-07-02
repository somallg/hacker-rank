/**
 * Interviewbit - MaxDistance
 */

function maxDistance(array: number[]): number {
  const l = array.length;
  if (l === 0) {
    return -1;
  }

  const indexes = array
    .map((n, index) => [n, index])
    .sort((a, b) => a[0] - b[0])
    .map(([, index]) => index);

  let i = 0;
  let result = 0;
  while (i < l) {
    let j = i + 1;
    while (j < l && indexes[j] >= indexes[i]) {
      j = j + 1;
      result = Math.max(result, indexes[j - 1] - indexes[i]);
    }

    i = j;
  }

  return result;
}

export { maxDistance };
