/**
 * Codility - CommonPrimeDivisors
 */

import { gcd } from '../gcd/gcd';

function removeCommonPrimeDivisors(x: number, g: number) {
  while (x !== 1) {
    // tslint:disable:no-parameter-reassignment
    g = gcd(x, g, 1);

    if (g === 1) {
      break;
    }

    x = x / g;
  }

  return x;
}

function solution(arrA: number[], arrB: number[]): number {
  return arrA
    .map((a, index) => [a, arrB[index]])
    .map(([a, b]) => {
      const gcdAB = gcd(a, b, 1);

      return (
        removeCommonPrimeDivisors(a, gcdAB) === 1 &&
        removeCommonPrimeDivisors(b, gcdAB) === 1
      );
    })
    .reduce((acc, isSame) => {
      return isSame ? acc + 1 : acc;
    }, 0);
}

export { solution };
