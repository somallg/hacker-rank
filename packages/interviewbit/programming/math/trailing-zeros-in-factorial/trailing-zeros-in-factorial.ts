/**
 * Trailing Zeros in Factorial
 */

function trailingZerosInFactorial(n: number): number {
  let result = 0;

  while (n >= 5) {
    n = Math.floor(n / 5);
    result = result + n;
  }

  return result;
}

export { trailingZerosInFactorial };
