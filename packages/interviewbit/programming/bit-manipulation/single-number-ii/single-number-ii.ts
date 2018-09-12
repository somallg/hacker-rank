/**
 * SingleNumberIi
 */

function countBitOneAtIndex(array: number[], index: number): number {
  const bitMask = 1 << index;

  return array.reduce((acc, n) => {
    return acc + ((n & bitMask) > 0 ? 1 : 0);
  }, 0);
}

function singleNumberIi(array: number[]): number {
  let result = 0;
  for (let i = 0; i < 32; i += 1) {
    const ones = countBitOneAtIndex(array, i);
    if ((ones - 1) % 3 === 0) {
      result |= 1 << i;
    }
  }

  return result;
}

export { singleNumberIi };
