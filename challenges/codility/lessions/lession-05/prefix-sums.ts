/**
 *
 */

function prefixSums(arr: number[]): number[] {
  const p = arr.reduce(
    (acc, e, i) => {
      acc[i] = e + acc[Math.max(0, i - 1)];
      return acc;
    },
    [0]
  );

  return [0, ...p];
}

function countTotal(
  arr: number[],
  leftPosition: number,
  rightPosition: number
): number {
  return arr[rightPosition + 1] - arr[leftPosition];
}

export { prefixSums, countTotal };
