/**
 */

function getPreviousToLeft(
  arr: number[],
  index: number,
  array: number[]
): number {
  return arr[index - 1] === undefined ? -array[0] : arr[index - 1];
}

function reduceMaxSum(fn: Function): Function {
  return (
    arr: number[],
    element: number,
    index: number,
    array: number[]
  ): number[] => {
    const previousSum: number = fn(arr, index, array);
    arr.push(Math.max(0, previousSum + element));

    return arr;
  };
}

function solveMaxDoubleSliceSum(arr: number[]): number {
  const maxSumEndAtIndex: number[] = arr.reduce(
    // @ts-ignore
    reduceMaxSum(getPreviousToLeft),
    []
  );

  const maxSumStartAtIndex: number[] = arr
    .reverse()
    // @ts-ignore
    .reduce(reduceMaxSum(getPreviousToLeft), [])
    .reverse();

  const l: number = maxSumStartAtIndex.length;

  return maxSumStartAtIndex.reduce(
    (maxSum: number, _: number, index: number) => {
      const maxLeft: number =
        index === 0 ? -Infinity : maxSumEndAtIndex[index - 1];
      const maxRight: number =
        index === l - 1 ? -Infinity : maxSumStartAtIndex[index + 1];

      return Math.max(maxSum, maxLeft + maxRight);
    },
    0
  );
}

export { reduceMaxSum, solveMaxDoubleSliceSum };
