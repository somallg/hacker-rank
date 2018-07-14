/**
 * Interviewbit - Flip
 */

function getMaxSumIndex(array: number[], reversed = false): number {
  if (reversed) {
    array.reverse();
  }
  const maxSumEnding = [array[0]];
  for (let i = 1; i < array.length; i = i + 1) {
    maxSumEnding[i] = Math.max(maxSumEnding[i - 1] + array[i], array[i]);
  }

  if (reversed) {
    maxSumEnding.reverse();
  }
  // find index of max
  let max = 0;
  let maxIndex = -1;

  for (let i = 0; i < maxSumEnding.length; i = i + 1) {
    if (max < maxSumEnding[i]) {
      max = maxSumEnding[i];
      maxIndex = i;
    }
  }

  return maxIndex;
}

function flip(s: string): number[] {
  const l = s.length;
  const arrayBits = s.split('').map(c => (c === '1' ? -1 : 1));
  if (l <= 0) {
    return [];
  }

  const maxSumEndingIndex = getMaxSumIndex(arrayBits);
  const maxSumStartingIndex = getMaxSumIndex(arrayBits, true);

  if (maxSumStartingIndex === -1 || maxSumEndingIndex === -1) {
    return [];
  }

  return [maxSumStartingIndex + 1, maxSumEndingIndex + 1];
}

export { flip };
