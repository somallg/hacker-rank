/**
 * Interviewbit - MaxNonNegativeSubarray
 */

function maxNonNegativeSubarray(array: number[]): number[] {
  const l = array.length;
  const prefixSums = [0];

  for (let i = 1; i <= l; i = i + 1) {
    prefixSums[i] = prefixSums[i - 1] + array[i - 1];
  }

  let max = -1;
  let startIndex = 0;
  let endIndex = 0;
  let i = 0;

  while (i < l) {
    let j = i;
    while (array[j] >= 0 && j < l) {
      j = j + 1;
    }

    const sum = prefixSums[j] - prefixSums[i];
    if (max < sum) {
      max = sum;
      startIndex = i;
      endIndex = j;
    }

    i = j + 1;
  }

  return array.slice(startIndex, endIndex);
}

export { maxNonNegativeSubarray };
