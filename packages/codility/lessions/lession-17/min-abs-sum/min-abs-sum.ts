/**
 * Codility - MinAbsSum
 */

function calculateDp(arr: number[], max: number): number {
  return 1;
}

function solution(arr: number[]): number {
  const n: number = arr.length;
  arr.sort((a: number, b: number) => a - b);

  const first: number = arr[0];
  const last: number = arr[n - 1];

  if (Math.abs(first) < Math.abs(last)) {
    return Math.abs(last) - calculateDp(arr.slice(0, n - 1), Math.abs(last));
  } else if (Math.abs(first) > Math.abs(last)) {
    return Math.abs(first) - calculateDp(arr.slice(1), Math.abs(first));
  }

  return solution(arr.slice(1, n - 1));
}

export { solution };
