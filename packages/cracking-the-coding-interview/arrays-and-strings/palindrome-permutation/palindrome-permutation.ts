/**
 * PalindromePermutation
 */

function toggleBitVector(bitVector: number, index: number): number {
  if (index < 0) {
    return bitVector;
  }

  const mask: number = 1 << index;

  if ((bitVector & mask) === 0) {
    // tslint:disable-next-line
    bitVector |= mask;
  } else {
    // tslint:disable-next-line
    bitVector &= ~mask;
  }

  return bitVector;
}

function checkExactlyOneBitSet(bitVector: number): boolean {
  return (bitVector & (bitVector - 1)) === 0;
}

function palindromePermutation(s: string): boolean {
  if (s.length === 0) {
    return true;
  }

  const bitVector: number = s
    .split('')
    .map((c: string) => c.charCodeAt(0) - 'a'.charCodeAt(0))
    .reduce(toggleBitVector, 0);

  return bitVector === 0 || checkExactlyOneBitSet(bitVector);
}

export { palindromePermutation };
