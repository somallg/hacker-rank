/**
 * FlipBitToWin
 */

const NUMBER_OF_BITS: number = 32;

function flipBitToWin(n: number): number {
  if (~n === 0) {
    // if all 1, already have longest length
    return NUMBER_OF_BITS;
  }

  let maxLength: number = 1; // we can always get seq of length 1

  let previousLength: number = 0;
  let currentLength: number = 0;

  while (n > 0) {
    if ((n & 1) === 1) {
      currentLength += 1;
    } else {
      previousLength = (n & 2) === 0 ? 0 : currentLength;
      currentLength = 0;
    }
    maxLength = Math.max(maxLength, previousLength + 1 + currentLength);
    // tslint:disable-next-line
    n >>= 1;
  }

  return maxLength;
}

export { flipBitToWin };
