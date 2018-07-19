/**
 * Codility - MinAbsSum
 */

function calculateDp(arr: number[], max: number): number {
  return 1;
}

function solution(arr: number[]): number {
  const n = arr.length;
  arr.sort((a, b) => a - b);

  let first = arr[0];
  let last = arr[n - 1];

  if (Math.abs(first) < Math.abs(last)) {
    return Math.abs(last) - calculateDp(arr.slice(0, n - 1), Math.abs(last));
  } else if (Math.abs(first) > Math.abs(last)) {
    return Math.abs(first) - calculateDp(arr.slice(1), Math.abs(first));
  }

  return solution(arr.slice(1, n - 1));
}

export { solution };
