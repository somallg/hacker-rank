/**
 * NumberOf1Bits
 */

function numberOf1Bits(n: number): number {
  let result = 0;

  while (n > 0) {
    result += 1;
    n &= n - 1;
  }

  return result;
}

export { numberOf1Bits };
