/**
 * Interviewbit - MaximumUnsortedSubarray
 */

function maximumUnsortedSubarray(array: number[]): number[] {
  const len: number = array.length;

  let l: number;
  for (l = 0; l < len - 1; l = l + 1) {
    if (array[l] > array[l + 1]) {
      break;
    }
  }

  let r: number;
  for (r = len - 1; r >= 1; r = r - 1) {
    if (array[r] < array[r - 1]) {
      break;
    }
  }

  if (r === 0 && l === len - 1) {
    return [-1];
  }

  // need to adjust so
  // max(A[0, left - 1]) = A[left - 1] <= min(A[left, right])
  // max(A[left, right]) <= min(A[right + 1])
  let minLeftRight: number = Infinity;
  let maxLeftRight: number = -Infinity;
  for (let i: number = l; i <= r; i = i + 1) {
    if (array[i] < minLeftRight) {
      minLeftRight = array[i];
    }

    if (array[i] > maxLeftRight) {
      maxLeftRight = array[i];
    }
  }

  while (r < len && maxLeftRight > array[r + 1]) {
    r = r + 1;
  }

  while (l >= 1 && minLeftRight < array[l - 1]) {
    l = l - 1;
  }

  return [l, r];
}

export { maximumUnsortedSubarray };
