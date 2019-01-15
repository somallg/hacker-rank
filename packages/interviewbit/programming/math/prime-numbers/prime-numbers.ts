/**
 * Interviewbit - PrimeNumbers
 */

function primeNumbers(n: number): number[] {
  const sieve: number[] = Array(n + 1).fill(0);

  for (let i: number = 2; i * i <= n; i = i + 1) {
    for (let j: number = i * i; j <= n; j = j + i) {
      if (sieve[i] === 0) {
        sieve[j] = 1;
      }
    }
  }

  const result: number[] = [];
  for (let i: number = 2; i <= n; i = i + 1) {
    if (sieve[i] === 0) {
      result.push(i);
    }
  }

  return result;
}

export { primeNumbers };
