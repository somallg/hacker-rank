/**
 * DifferentBitsSumPairwise
 */

function countNbOfSetBit(array: number[], shift: number): number {
  return array.reduce((acc: number, n: number) => {
    if (((n >>> shift) & 1) === 1) {
      return acc + 1;
    }

    return acc;
  }, 0);
}

function differentBitsSumPairwise(array: number[]): number {
  const l: number = array.length;
  let result: number = 0;

  for (let i: number = 0; i < 32; i += 1) {
    const nbOfSetBit: number = countNbOfSetBit(array, i);
    result += nbOfSetBit * (l - nbOfSetBit) * 2;
  }

  return result % (1e9 + 7);
}

export { differentBitsSumPairwise };
