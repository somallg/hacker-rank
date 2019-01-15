/**
 * Codility - CountNonDivisible
 */

function buildSieve(n: number): number[] {
  const result: number[] = Array(n + 1).fill(0);

  for (let i: number = 2; i * i <= n; i = i + 1) {
    if (result[i] === 0) {
      for (let k: number = i * i; k <= n; k = k + i) {
        if (result[k] === 0) {
          result[k] = i;
        }
      }
    }
  }

  return result;
}

function getPrimeFactors(n: number, sieve: number[]): number[] {
  const factors: number[] = [];
  let x: number;

  for (x = n; sieve[x] > 0; x = x / sieve[x]) {
    factors.push(sieve[x]);
  }

  factors.push(x);

  return factors;
}

function generateAllDivisors(arr: number[][]): number[] {
  // base case only 1 prime
  if (arr.length === 1) {
    const [[prime, power]]: number[][] = arr;

    return prime === 1
      ? [1]
      : Array(power + 1)
          .fill(0)
          .map((_: number, index: number) => prime ** index);
  }

  // ola
  const [[firstPrime, firstPower], ...rest]: number[][] = arr;
  const possibleDivisors: number[] = generateAllDivisors(rest) || [];

  return Array(firstPower + 1)
    .fill(0)
    .map((_: number, index: number) =>
      possibleDivisors.map((divisor: number) => divisor * firstPrime ** index)
    )
    .reduce((acc: number[], e: number[]) => acc.concat(e), <number[]>[]);
}

function getDivisors(n: number, sieve: number[]): number[] {
  const primeFactors: number[] = getPrimeFactors(n, sieve); // from prime factors calculate all divisors of n

  // number occurrence of each prime factors
  const nbOccurrence: Map<number, number> = primeFactors.reduce(
    (acc: Map<number, number>, nEle: number) => {
      const previousOcc: number | undefined = acc.get(nEle);
      if (previousOcc === undefined) {
        acc.set(nEle, 1);
      } else {
        acc.set(nEle, previousOcc + 1);
      }

      return acc;
    },
    new Map<number, number>()
  );

  // hence each prime can only appear 0 to nbOccurrence[p] max times
  const primesAndOccs: number[][] = [];

  nbOccurrence.forEach((power: number, prime: number) => {
    primesAndOccs.push([prime, power]);
  });

  return generateAllDivisors(primesAndOccs);
}

function buildDivisorsMap(
  arr: number[],
  sieve: number[]
): Map<number, number[]> {
  return arr.reduce((acc: Map<number, number[]>, n: number) => {
    if (acc.get(n) === undefined) {
      acc.set(n, getDivisors(n, sieve));
    }

    return acc;
  }, new Map<number, number[]>());
}

function solution(arr: number[]): number[] {
  const n: number = arr.reduce((max: number, e: number) => Math.max(max, e));
  const sieve: number[] = buildSieve(n);
  const occurrence: Map<number, number> = arr.reduce(
    (occ: Map<number, number>, e: number) => {
      const previous: number | undefined = occ.get(e);
      if (previous === undefined) {
        occ.set(e, 1);
      } else {
        occ.set(e, previous + 1);
      }

      return occ;
    },
    new Map<number, number>()
  );

  const divisorsMap: Map<number, number[]> = buildDivisorsMap(arr, sieve);

  return arr.map((e: number) => {
    const divisors: number[] = divisorsMap.get(e) || [];
    // calculate occurrence of each divisor
    const occurrenceOfDivisors: number = divisors.reduce(
      (acc: number, ele: number) => {
        return acc + (occurrence.get(ele) || 0);
      },
      0
    );

    return arr.length - occurrenceOfDivisors;
  });
}

export { solution };
