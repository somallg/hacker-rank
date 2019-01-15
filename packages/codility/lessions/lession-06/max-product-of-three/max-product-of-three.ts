/**
 */

function solveMaxProductOfThree(arr: number[]): number {
  const ascendingArr: number[] = arr.sort((a: number, b: number) => a - b);
  const n: number = arr.length;
  const [min1, min2]: number[] = ascendingArr;

  return Math.max(
    min1 * min2 * ascendingArr[n - 1],
    ascendingArr[n - 1] * ascendingArr[n - 2] * ascendingArr[n - 3]
  );
}

export { solveMaxProductOfThree };
