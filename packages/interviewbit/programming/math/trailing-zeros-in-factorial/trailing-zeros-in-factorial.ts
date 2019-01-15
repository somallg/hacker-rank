/**
 * Trailing Zeros in Factorial problem
 */

function trailingZerosInFactorial(n: number): number {
  let result: number = 0;

  while (n >= 5) {
    // tslint:disable-next-line
    n = Math.floor(n / 5);
    result = result + n;
  }

  return result;
}

export { trailingZerosInFactorial };
