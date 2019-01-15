/**
 * Interviewbit - PalindromeInteger
 */

function getDigitAt(n: number, length: number, index: number): number {
  return Math.floor(n / 10 ** (length - index - 1)) % 10;
}

function getLengthNumber(n: number): number {
  let result: number = 0;
  while (n > 0) {
    // tslint:disable-next-line
    n = Math.floor(n / 10);
    result = result + 1;
  }

  return result;
}

function palindromeInteger(n: number): number {
  const l: number = getLengthNumber(n);
  const middle: number = Math.floor(l / 2);

  for (let i: number = 0; i <= middle; i = i + 1) {
    if (getDigitAt(n, l, i) !== getDigitAt(n, l, l - i - 1)) {
      return 0;
    }
  }

  return 1;
}

export { palindromeInteger };
