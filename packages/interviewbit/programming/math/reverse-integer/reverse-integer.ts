/**
 * Interviewbit - ReverseInteger
 */

function reverseInteger(n: number): number {
  let result: number = 0;
  const sign: number = n > 0 ? 1 : -1;
  // tslint:disable-next-line
  n = Math.abs(n);

  while (n > 0) {
    result = result * 10 + (n % 10);
    // tslint:disable-next-line
    n = Math.floor(n / 10);
  }

  return result > 2 ** 31 ? 0 : sign * result;
}

export { reverseInteger };
