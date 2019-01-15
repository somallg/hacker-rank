/**
 * SortedInsertPosition
 */

function sortedInsertPosition(array: number[], target: number): number {
  let start: number = 0;
  let end: number = array.length - 1;

  while (start <= end) {
    // tslint:disable:no-bitwise
    const middle: number = (start + end) >>> 1;

    if (array[middle] < target) {
      start = middle + 1;
    } else if (array[middle] > target) {
      end = middle - 1;
    } else {
      return middle;
    }
  }

  return start;
}

export { sortedInsertPosition };
