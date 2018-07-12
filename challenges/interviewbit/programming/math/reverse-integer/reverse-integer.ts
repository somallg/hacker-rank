/**
 * Interviewbit - ReverseInteger
 */

function reverseInteger(n: number): number {
  let result = 0;
  const sign = n > 0 ? 1 : -1;
  n = Math.abs(n);

  while (n > 0) {
    result = result * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  return result > 2 ** 31 ? 0 : sign * result;
}

export { reverseInteger };
