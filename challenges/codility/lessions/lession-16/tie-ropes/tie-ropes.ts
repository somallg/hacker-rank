/**
 * Codility - TieRopes
 */

function solution(k: number, arr: number[]): number {
  let result = 0;
  let currentLength = 0;

  arr.forEach(a => {
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
