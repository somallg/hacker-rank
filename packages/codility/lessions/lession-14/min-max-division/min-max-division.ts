/**
 * Codility - MinMaxDivision
 */

function canBuildBlockWithSum(
  arr: number[],
  sum: number,
  nbBlocks: number
): boolean {
  let currentSum: number = 0;
  let nbBuiltBlocks: number = 0;
  let i: number;

  for (i = 0; i < arr.length; i = i + 1) {
    const a: number = arr[i];
    if (currentSum + a <= sum) {
      currentSum = currentSum + a;
    } else {
      currentSum = a;
      nbBuiltBlocks = nbBuiltBlocks + 1;
    }

    if (nbBuiltBlocks === nbBlocks) {
      break;
    }
  }

  return i === arr.length;
}

function solution(nbBlocks: number, maxValue: number, arr: number[]): number {
  const maxA: number = arr.reduce((max: number, a: number) => Math.max(max, a));
  const sumA: number = arr.reduce((acc: number, a: number) => acc + a);

  let start: number = maxA;
  let end: number = sumA;
  let result: number = -1;

  while (start <= end) {
    const middle: number = (start + end) >>> 1;

    if (!canBuildBlockWithSum(arr, middle, nbBlocks)) {
      start = middle + 1;
    } else {
      result = middle;
      end = middle - 1;
    }
  }

  return result;
}

export { solution };
