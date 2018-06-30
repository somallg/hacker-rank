/**
 * Interviewbit - WaveArray
 */

function waveArray(array: number[]): number[] {
  const l = array.length;
  if (l === 0) {
    return [];
  }

  array.sort((a, b) => a - b);

  let i = 0;
  while (i < l - 1) {
    // swap i voi i + 1;
    [array[i], array[i + 1]] = [array[i + 1], array[i]];
    i = i + 2;
  }

  return array;
}

export { waveArray };
