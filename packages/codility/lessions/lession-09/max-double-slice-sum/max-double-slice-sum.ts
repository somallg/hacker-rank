/**
 */

function getPreviousToLeft(arr: number[], index: number, array: number[]) {
  return arr[index - 1] === undefined ? -array[0] : arr[index - 1];
}

function reduceMaxSum(fn: Function) {
  return function(
    arr: number[],
    element: number,
    index: number,
    array: number[]
  ) {
    const previousSum = fn(arr, index, array);
    arr.push(Math.max(0, previousSum + element));

    return arr;
  };
}

function solveMaxDoubleSliceSum(arr: number[]): number {
  const maxSumEndAtIndex = arr.reduce(reduceMaxSum(getPreviousToLeft), []);

  const maxSumStartAtIndex = arr
    .reverse()
    .reduce(reduceMaxSum(getPreviousToLeft), [])
    .reverse();

  const l = maxSumStartAtIndex.length;

  return maxSumStartAtIndex.reduce((maxSum, _, index) => {
    const maxLeft = index === 0 ? -Infinity : maxSumEndAtIndex[index - 1];
    const maxRight =
      index === l - 1 ? -Infinity : maxSumStartAtIndex[index + 1];

    return Math.max(maxSum, maxLeft + maxRight);
  }, 0);
}

export { reduceMaxSum, solveMaxDoubleSliceSum };
