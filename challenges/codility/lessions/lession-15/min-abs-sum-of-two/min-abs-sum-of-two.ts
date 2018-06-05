/**
 * Codility - MinAbsSumOfTwo
 */

function solution(arr: number[]): number {
  arr.sort((a, b) => a - b);

  const n = arr.length;
  let result = Infinity;
  let back = 0;
  let front = n - 1;

  while (back <= front) {
    const sum = arr[back] + arr[front];
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
