/**
 */

function getPreviousToLeft(arr: number[], index: number, array: number[]) {
  return arr[index - 1] === undefined ? 0 : arr[index - 1];
}

function reduceMaxSum(fn: Function) {
  return function(
    arr: number[],
    element: number,
    index: number,
    array: number[]
  ) {
    const previousSum = fn(arr, index, array);
    arr.push(Math.max(element, previousSum + element));

    return arr;
  };
}

function solveMaxSliceSum(arr: number[]): number {
  const maxSumEndAtIndex = arr
    .reduce(reduceMaxSum(getPreviousToLeft), [])
    .reduce((a, b) => Math.max(a, b));

  const maxSumStartAtIndex = arr
    .reverse()
    .reduce(reduceMaxSum(getPreviousToLeft), [])
    .reduce((a, b) => Math.max(a, b));

  return Math.max(maxSumStartAtIndex, maxSumEndAtIndex);
}

export { solveMaxSliceSum };
