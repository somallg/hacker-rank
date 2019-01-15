/**
 * NumbersOfLengthNAndValueLessThanK
 */

function numbersOfLengthNAndValueLessThanK(
  setOfDigits: number[],
  n: number,
  k: number
): number {
  const d: number = setOfDigits.length;
  if (d === 0) {
    return 0;
  }

  if (k / 10 ** (n - 1) < 1) {
    return 0;
  }

  let result: number = 0;

  for (let i: number = 1; i <= n; i = i + 1) {
    // calculate the possibilty of number having the first
    // digits is digitsC[i]
    const digitOfK: number = Math.floor(k / 10 ** (n - i));
    const possibleDigits: number[] = setOfDigits.filter((digit: number) => {
      if (i === 1 && n > 1) {
        return digit > 0 && digit < digitOfK;
      }

      return digit < digitOfK;
    });

    result = result + possibleDigits.length * Math.pow(d, n - i);

    if (setOfDigits.indexOf(digitOfK) === -1) {
      // digitOfK not in setOfDigits which mean we can't form
      // any number starting with digitOfK
      break;
    }

    // tslint:disable-next-line
    k = k % 10 ** (n - i);
  }

  return result;
}

export { numbersOfLengthNAndValueLessThanK };
