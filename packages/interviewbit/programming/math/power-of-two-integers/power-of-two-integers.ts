/**
 * PowerOfTwoIntegers
 */

import { greatestCommonDivisor } from '../greatest-common-divisor/greatest-common-divisor';

function buildSieve(n: number): number[] {
  const sieve = [];
  for (let i = 0; i * i <= n; i = i + 1) {
    sieve[i] = 0;
  }

  for (let i = 2; i * i <= sieve.length; i = i + 1) {
    for (let j = i * i; j <= sieve.length; j = j + i) {
      if (sieve[i] === 0) {
        sieve[j] = 1;
      }
    }
  }

  return sieve;
}

function powerOfTwoIntegers(n: number): number {
  if (n <= 1) {
    return 1;
  }

  const sieveN = buildSieve(n);

  const factors = {};

  for (let i = 2; i < sieveN.length; i = i + 1) {
    while (sieveN[i] === 0 && n % i === 0) {
      factors[i] = factors[i] === undefined ? 1 : factors[i] + 1;
      n = n / i;
    }

    if (n === 1) {
      break;
    }
  }

  const powerOfDivs = Object.keys(factors).map(k => factors[k]);
  if (powerOfDivs.length === 0 || n > 1) {
    return 0;
  }

  if (powerOfDivs.length === 1) {
    return 1;
  }

  return powerOfDivs.reduce((acc, a) => greatestCommonDivisor(acc, a)) > 1
    ? 1
    : 0;
}

export { powerOfTwoIntegers };
