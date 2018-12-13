/**
 * PalindromePermutation
 */

function toggleBitVector(bitVector: number, index: number) {
  if (index < 0) {
    return bitVector;
  }

  const mask = 1 << index;

  if ((bitVector & mask) === 0) {
    bitVector |= mask;
  } else {
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

  const bitVector = s
    .split('')
    .map(c => c.charCodeAt(0) - 'a'.charCodeAt(0))
    .reduce(toggleBitVector, 0);

  return bitVector === 0 || checkExactlyOneBitSet(bitVector);
}

export { palindromePermutation };
