/**
 * NumbersOfLengthNAndValueLessThanK
 */

function toDigits(n: number): number[] {
  const result: number[] = [];

  while (n > 0) {
    result.push(n % 10);
    n = Math.floor(n / 10);
  }

  return result.reverse();
}

function numbersOfLengthNAndValueLessThanK(
  setOfDigits: number[],
  n: number,
  k: number
): number {
  const d = setOfDigits.length;
  if (d === 0) {
    return 0;
  }

  const digitsK = toDigits(k);
  if (digitsK.length < n) {
    return 0;
  }

  let result = 0;

  for (let i = 0; i < n; i = i + 1) {
    // calculate the possibilty of number having the first
    // digits is digitsC[i]
    const digitOfK = digitsK[i];
    const possibleDigits = setOfDigits.filter(digit => {
      if (i === 0 && n > 1) {
        return digit > 0 && digit < digitOfK;
      }

      return digit < digitOfK;
    });

    result = result + possibleDigits.length * Math.pow(d, n - i - 1);
  }

  return result;
}

export { numbersOfLengthNAndValueLessThanK };
