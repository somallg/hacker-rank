/**
 * Interviewbit - Flip
 */

function getMaxSumIndex(array: number[], reversed: boolean = false): number {
  if (reversed) {
    array.reverse();
  }
  const maxSumEnding: number[] = [array[0]];
  for (let i: number = 1; i < array.length; i = i + 1) {
    maxSumEnding[i] = Math.max(maxSumEnding[i - 1] + array[i], array[i]);
  }

  if (reversed) {
    maxSumEnding.reverse();
  }
  // find index of max
  let max: number = 0;
  let maxIndex: number = -1;

  for (let i: number = 0; i < maxSumEnding.length; i = i + 1) {
    if (max < maxSumEnding[i]) {
      max = maxSumEnding[i];
      maxIndex = i;
    }
  }

  return maxIndex;
}

function flip(s: string): number[] {
  const l: number = s.length;
  const arrayBits: number[] = s
    .split('')
    .map((c: string) => (c === '1' ? -1 : 1));
  if (l <= 0) {
    return [];
  }

  const maxSumEndingIndex: number = getMaxSumIndex(arrayBits);
  const maxSumStartingIndex: number = getMaxSumIndex(arrayBits, true);

  if (maxSumStartingIndex === -1 || maxSumEndingIndex === -1) {
    return [];
  }

  return [maxSumStartingIndex + 1, maxSumEndingIndex + 1];
}

export { flip };
