/**
 * Codility - CountDistinctSlices
 */

function solution(m: number, arr: number[]): number {
  let result = 0;
  let front = 0;
  const accessed = new Map<number, boolean>();

  for (let back = 0; back < arr.length; back = back + 1) {
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
