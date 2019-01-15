/**
 * Interviewbit - WaveArray
 */

function waveArray(array: number[]): number[] {
  const l: number = array.length;
  if (l === 0) {
    return [];
  }

  array.sort((a: number, b: number) => a - b);

  let i: number = 0;
  while (i < l - 1) {
    // swap i voi i + 1;
    [array[i], array[i + 1]] = [array[i + 1], array[i]];
    i = i + 2;
  }

  return array;
}

export { waveArray };
