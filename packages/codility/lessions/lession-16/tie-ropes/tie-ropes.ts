/**
 * Codility - TieRopes
 */

function solution(k: number, arr: number[]): number {
  let result: number = 0;
  let currentLength: number = 0;

  arr.forEach((a: number) => {
    if (currentLength + a >= k) {
      currentLength = 0;
      result = result + 1;
    } else {
      currentLength = currentLength + a;
    }
  });

  return result;
}

export { solution };
