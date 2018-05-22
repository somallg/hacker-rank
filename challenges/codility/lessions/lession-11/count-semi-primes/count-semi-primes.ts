/**
 * Codility - CountSemiPrimes
 */

const PRIME = 0;
const SEMI_PRIME = 1;
const COMPOSITE = 2;

function buildSieve(n: number): number[] {
  const sieve: number[] = Array(n + 1).fill(0);

  for (let i = 2; i * i <= n; i = i + 1) {
    if (sieve[i] === PRIME) {
      // is prime cross out every multiple of i
      for (let k = i * i; k <= n; k = k + i) {
        if (sieve[k / i] === PRIME) {
          sieve[k] = SEMI_PRIME;
        } else {
          // already crossed out
          sieve[k] = COMPOSITE;
        }
      }
    }
  }

  return sieve;
}

function solution(n: number, p: number[], q: number[]): number[] {
  // 1. Caculate Sieve ofr Eratostheses to remember the number of prime factor
  // 2. Caculate PrefixSum
  // 3. Loop and done

  debugger;
  const sieve = buildSieve(n);
  const prefixSum = sieve.reduce(
    (acc, n, index) => {
      const previousValue = acc[index - 1] === undefined ? 0 : acc[index - 1];
      acc.push((n === SEMI_PRIME ? 1 : 0) + previousValue);
      return acc;
    },
    [] as number[]
  );

  const result: number[] = [];

  p.forEach((startIndex, index) => {
    const endIndex = q[index];
    result.push(prefixSum[endIndex] - prefixSum[Math.max(0, startIndex - 1)]);
  });

  return result;
}

export { solution };
