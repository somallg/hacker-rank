/**
 * NumberOf1Bits
 */

function numberOf1Bits(n: number): number {
  let result: number = 0;

  while (n > 0) {
    result += 1;
    // tslint:disable-next-line
    n &= n - 1;
  }

  return result;
}

export { numberOf1Bits };
