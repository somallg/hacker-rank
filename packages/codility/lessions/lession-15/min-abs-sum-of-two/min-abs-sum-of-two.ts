/**
 * Codility - MinAbsSumOfTwo
 */

function solution(arr: number[]): number {
  arr.sort((a: number, b: number) => a - b);

  const n: number = arr.length;
  let result: number = Infinity;
  let back: number = 0;
  let front: number = n - 1;

  while (back <= front) {
    const sum: number = arr[back] + arr[front];
    result = Math.min(result, Math.abs(sum));

    if (sum <= 0) {
      back = back + 1;
    } else {
      front = front - 1;
    }
  }

  return result;
}

export { solution };
