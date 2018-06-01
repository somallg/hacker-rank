/**
 * Codility - MinMaxDivision
 */

function canBuildBlockWithSum(
  arr: number[],
  sum: number,
  nbBlocks: number
): boolean {
  let currentSum = 0;
  let nbBuiltBlocks = 0;
  let i = 0;

  for (i = 0; i < arr.length; i = i + 1) {
    const a = arr[i];
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
  const maxA = arr.reduce((max, a) => Math.max(max, a));
  const sumA = arr.reduce((acc, a) => acc + a);

  let start = maxA;
  let end = sumA;
  let result = -1;

  while (start <= end) {
    const middle = (start + end) >>> 1;

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
