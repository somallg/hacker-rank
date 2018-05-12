/**
 */

function solveMaxProductOfThree(arr: number[]): number {
  const ascendingArr = arr.sort((a, b) => a - b);
  const n = arr.length;
  const [min1, min2] = ascendingArr;

  return Math.max(
    min1 * min2 * ascendingArr[n - 1],
    ascendingArr[n - 1] * ascendingArr[n - 2] * ascendingArr[n - 3]
  );
}

export { solveMaxProductOfThree };
