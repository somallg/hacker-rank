/**
 * Codility - CountDistinctSlices
 */

function solution(m: number, arr: number[]): number {
  let result: number = 0;
  let front: number = 0;
  const accessed: Map<number, boolean> = new Map<number, boolean>();

  for (let back: number = 0; back < arr.length; back = back + 1) {
    while (front < arr.length && !accessed.get(arr[front])) {
      accessed.set(arr[front], true);
      front = front + 1;
    }

    result = result + (front - back);
    accessed.set(arr[back], false);
  }

  return Math.min(result, 1e9);
}

export { solution };
