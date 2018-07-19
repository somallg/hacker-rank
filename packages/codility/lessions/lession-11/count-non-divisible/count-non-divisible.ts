/**
 * Codility - CountNonDivisible
 */

function buildSieve(n: number): number[] {
  const result: number[] = Array(n + 1).fill(0);

  for (let i = 2; i * i <= n; i = i + 1) {
    if (result[i] === 0) {
      for (let k = i * i; k <= n; k = k + i) {
        if (result[k] === 0) {
          result[k] = i;
        }
      }
    }
  }

  return result;
}

function getPrimeFactors(n: number, sieve: number[]): number[] {
  const factors = [];
  let x;

  for (x = n; sieve[x] > 0; x = x / sieve[x]) {
    factors.push(sieve[x]);
  }

  factors.push(x);

  return factors;
}

function generateAllDivisors(arr: number[][]) {
  // base case only 1 prime
  if (arr.length === 1) {
    const [[prime, power]] = arr;

    return prime === 1
      ? [1]
      : Array(power + 1)
          .fill(0)
          .map((_, index) => prime ** index);
  }

  // ola
  const [[firstPrime, firstPower], ...rest] = arr;
  const possibleDivisors: number[] = generateAllDivisors(rest) || [];

  return Array(firstPower + 1)
    .fill(0)
    .map((_, index) =>
      possibleDivisors.map(divisor => divisor * firstPrime ** index)
    )
    .reduce((acc, e) => acc.concat(e), []);
}

function getDivisors(n: number, sieve: number[]): number[] {
  const primeFactors = getPrimeFactors(n, sieve); // from prime factors calculate all divisors of n

  // number occurrence of each prime factors
  const nbOccurrence = primeFactors.reduce((acc, n) => {
    const previousOcc = acc.get(n);
    if (previousOcc === undefined) {
      acc.set(n, 1);
    } else {
      acc.set(n, previousOcc + 1);
    }

    return acc;
  }, new Map<number, number>());

  // hence each prime can only appear 0 to nbOccurrence[p] max times
  const primesAndOccs: number[][] = [];

  nbOccurrence.forEach((power, prime) => {
    primesAndOccs.push([prime, power]);
  });

  return generateAllDivisors(primesAndOccs);
}

function buildDivisorsMap(
  arr: number[],
  sieve: number[]
): Map<number, number[]> {
  return arr.reduce((acc, n) => {
    if (acc.get(n) === undefined) {
      acc.set(n, getDivisors(n, sieve));
    }

    return acc;
  }, new Map<number, number[]>());
}

function solution(arr: number[]): number[] {
  const n = arr.reduce((max, e) => Math.max(max, e));
  const sieve = buildSieve(n);
  const occurrence: Map<number, number> = arr.reduce((occ, e) => {
    const previous = occ.get(e);
    if (previous === undefined) {
      occ.set(e, 1);
    } else {
      occ.set(e, previous + 1);
    }
    return occ;
  }, new Map<number, number>());

  const divisorsMap = buildDivisorsMap(arr, sieve);

  return arr.map(e => {
    const divisors = divisorsMap.get(e) || [];
    // calculate occurrence of each divisor
    const occurrenceOfDivisors = divisors.reduce((acc, e) => {
      return acc + (occurrence.get(e) || 0);
    }, 0);

    return arr.length - occurrenceOfDivisors;
  });
}

export { solution };
