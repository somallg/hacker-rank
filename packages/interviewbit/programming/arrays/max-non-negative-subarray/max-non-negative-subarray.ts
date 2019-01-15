/**
 * Interviewbit - MaxNonNegativeSubarray
 */

function maxNonNegativeSubarray(array: number[]): number[] {
  const l: number = array.length;
  const prefixSums: number[] = [0];

  // tslint:disable-next-line
  for (let i: number = 1; i <= l; i = i + 1) {
    prefixSums[i] = prefixSums[i - 1] + array[i - 1];
  }

  let max: number = -1;
  let startIndex: number = 0;
  let endIndex: number = 0;
  let i: number = 0;

  while (i < l) {
    let j: number = i;
    while (array[j] >= 0 && j < l) {
      j = j + 1;
    }

    const sum: number = prefixSums[j] - prefixSums[i];
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
