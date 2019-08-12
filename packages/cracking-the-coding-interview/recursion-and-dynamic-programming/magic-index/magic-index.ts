/**
 * MagicIndex
 */

function magicIndexRec(array: number[], start: number, end: number): number {
  if (start > end) {
    return -1;
  }

  const mid: number = (start + end) >>> 1;
  const midValue: number = array[mid];

  if (array[mid] === mid) {
    return mid;
  }

  // search on the left first
  const leftIndex: number = Math.min(mid - 1, midValue);
  const left: number = magicIndexRec(array, start, leftIndex);
  if (left >= 0) {
    return left;
  }
  // search on the right
  const rightIndex: number = Math.max(mid + 1, midValue);

  return magicIndexRec(array, rightIndex, end);
}

function magicIndex(array: number[]): number {
  return magicIndexRec(array, 0, array.length - 1);
}

export { magicIndex };
