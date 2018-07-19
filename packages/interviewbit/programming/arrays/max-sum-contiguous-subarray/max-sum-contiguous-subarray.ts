/**
 * Interviewbit - MaxSumContiguousSubarray
 */

function maxSumContiguousSubarray(array: number[]): number {
  const l = array.length;
  if (l === 0) {
    return 0;
  }

  const result: number[] = [array[0]];
  let max = array[0];

  for (let i = 1; i < l; i = i + 1) {
    result[i] = Math.max(result[i - 1] + array[i], array[i]);
    max = Math.max(max, result[i]);
  }

  return max;
}

export { maxSumContiguousSubarray };
