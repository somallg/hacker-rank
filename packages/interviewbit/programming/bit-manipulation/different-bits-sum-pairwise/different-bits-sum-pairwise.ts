/**
 * DifferentBitsSumPairwise
 */

function countNbOfSetBit(array: number[], shift: number): number {
  return array.reduce((acc, n) => {
    if (((n >>> shift) & 1) === 1) {
      return acc + 1;
    }

    return acc;
  }, 0);
}

function differentBitsSumPairwise(array: number[]): number {
  const l = array.length;
  let result = 0;

  for (let i = 0; i < 32; i += 1) {
    const nbOfSetBit = countNbOfSetBit(array, i);
    result += 2 * nbOfSetBit * (l - nbOfSetBit);
  }

  return result % (1e9 + 7);
}

export { differentBitsSumPairwise };
