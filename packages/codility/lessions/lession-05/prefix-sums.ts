/**
 *
 */

function prefixSums(arr: number[]): number[] {
  const p: number[] = arr.reduce(
    (acc: number[], e: number, i: number) => {
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
