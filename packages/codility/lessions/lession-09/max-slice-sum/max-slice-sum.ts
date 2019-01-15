/**
 */

function max(a: number, b: number): number {
  return Math.max(a, b);
}

function getPreviousToLeft(arr: number[], index: number): number {
  return arr[index - 1] === undefined ? 0 : arr[index - 1];
}

function reduceMaxSum(fn: (arr: number[], ele: number) => number): Function {
  return (arr: number[], element: number, index: number): number[] => {
    const previousSum: number = fn(arr, index);
    arr.push(Math.max(element, previousSum + element));

    return arr;
  };
}

function solveMaxSliceSum(arr: number[]): number {
  const maxSumEndAtIndex: number = arr
    // @ts-ignore
    .reduce(reduceMaxSum(getPreviousToLeft), [])
    .reduce(max, -Infinity);

  const maxSumStartAtIndex: number = arr
    .reverse()
    // @ts-ignore
    .reduce(reduceMaxSum(getPreviousToLeft), [])
    .reduce(max, -Infinity);

  return max(maxSumStartAtIndex, maxSumEndAtIndex);
}

export { solveMaxSliceSum };
