/**
 * Codility - ChocolatesByNumbers
 */

import { gcd } from '../gcd/gcd';

function solution(nbChocolates: number, skip: number): number {
  const div = gcd(nbChocolates, skip, 1);

  return nbChocolates / div;
}

export { solution };
