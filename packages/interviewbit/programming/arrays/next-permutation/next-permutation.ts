/**
 * Interviewbit - NextPermutation
 */

function swapBetweenIndexes(
  startIndex: number,
  endIndex: number,
  array: number[]
): number[] {
  const middleIndex = Math.floor((endIndex - startIndex) >>> 1);
  for (let i = 0; i <= middleIndex; i = i + 1) {
    [array[startIndex + i], array[endIndex - i]] = [
      array[endIndex - i],
      array[startIndex + i]
    ];
  }
  return array;
}

function getSwapIndex(array: number[], preSuffixIndex: number) {
  const l = array.length;
  for (let i = l - 1; i > preSuffixIndex; i = i - 1) {
    if (array[i] > array[preSuffixIndex]) {
      return i;
    }
  }

  return -1;
}

function nextPermutation(array: number[]): number[] {
  const l = array.length;
  if (l < 2) {
    return array;
  }

  let preSuffixIndex = l - 2;

  while (
    preSuffixIndex >= 0 &&
    array[preSuffixIndex] >= array[preSuffixIndex + 1]
  ) {
    preSuffixIndex = preSuffixIndex - 1;
  }

  if (preSuffixIndex === -1) {
    return array.reverse();
  }

  // need to find index between swapIndex and l - 1
  // where array[swapIndex]
  const swapIndex = getSwapIndex(array, preSuffixIndex);
  [array[preSuffixIndex], array[swapIndex]] = [
    array[swapIndex],
    array[preSuffixIndex]
  ];

  // reverse the suffix i.e from swapIndex + 1 to l - 1
  return swapBetweenIndexes(preSuffixIndex + 1, l - 1, array);
}

export { nextPermutation };
