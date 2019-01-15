/**
 * Codility - AbsDistinct
 */

function solution(arr: number[]): number {
  let result: number = 0;
  let left: number = 0;
  let right: number = arr.length - 1;

  while (left <= right) {
    // skip as many as possible on left side
    while (left < arr.length - 1 && arr[left + 1] === arr[left]) {
      left = left + 1;
    }

    // skip as many as possible on right right
    while (right > 0 && arr[right - 1] === arr[right]) {
      right = right - 1;
    }

    if (Math.abs(arr[left]) < Math.abs(arr[right])) {
      right = right - 1;
    } else if (Math.abs(arr[left]) > Math.abs(arr[right])) {
      left = left + 1;
    } else {
      left = left + 1;
      right = right - 1;
    }

    result = result + 1;
  }

  return result;
}

export { solution };
