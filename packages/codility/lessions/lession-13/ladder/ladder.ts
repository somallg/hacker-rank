/**
 * Codility - Ladder
 */

import { fibonacci } from '../fibonacci/fibonacci';

function solution(arrA: number[], arrB: number[]): number[] {
  const length: number = arrA.reduce((acc: number, a: number) =>
    Math.max(acc, a)
  );

  const fibArray: number[] = fibonacci(length);

  return arrA
    .map((a: number, index: number) => [a, 2 ** arrB[index]])
    .map(([ladder, modulo]: number[]) => fibArray[ladder] % modulo);
}

export { solution };
