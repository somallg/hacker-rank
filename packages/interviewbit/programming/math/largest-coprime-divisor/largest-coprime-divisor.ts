/**
 * LargestCoprimeDivisor
 */

import { greatestCommonDivisor } from '../greatest-common-divisor';

function largestCoprimeDivisor(a: number, b: number): number {
  if (a === 0) {
    return 0;
  }

  let gcdAB = greatestCommonDivisor(a, b);

  while (gcdAB > 1) {
    a = a / gcdAB;
    gcdAB = greatestCommonDivisor(a, b);
  }

  return a;
}

export { largestCoprimeDivisor };
