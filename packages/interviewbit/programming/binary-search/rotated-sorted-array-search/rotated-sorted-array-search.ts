/**
 * RotatedSortedArraySearch
 */

function searchPivot(array: number[]): number {
  const l = array.length;
  let start = 0;
  let end = l - 1;

  while (start <= end) {
    const middle = (start + end) >>> 1;
    // if middle is the pivot then we need to find the first element of the sorted array based on the pivot
    // original array: the last one is on l - 1 index
    // if its rotated by pivot => (l - 1 + pivot) % l = pivot - 1
    // hence array[pivot] => min
    // index 0 => index 0 + pivot
    // index 1 => index: 1 + pivot % (l - 1)
    if (array[middle] <= array[l - 1]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return start;
}

function rotatedSortedArraySearch(array: number[], target: number): number {
  const l = array.length;
  const pivot = searchPivot(array);
  // [0...pivot-1] is the upper partitiion
  // [pivot...l - 1] is the lower partitiion
  let start = 0;
  let end = 0;

  if (pivot > 0 && target >= array[0]) {
    start = 0;
    end = pivot;
  } else {
    start = pivot;
    end = l - 1;
  }

  while (start <= end) {
    const middle = (start + end) >>> 1;

    if (array[middle] < target) {
      start = middle + 1;
    } else if (array[middle] > target) {
      end = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

export { rotatedSortedArraySearch };
