/**
 * Codility - Ladder
 */

import { fibonacci } from '../fibonacci/fibonacci';

function solution(arrA: number[], arrB: number[]): number[] {
  const length = arrA.reduce((acc, a) => Math.max(acc, a));

  const fibArray = fibonacci(length);

  return arrA
    .map((a, index) => [a, 2 ** arrB[index]])
    .map(([ladder, modulo]) => fibArray[ladder] % modulo);
}

export { solution };
