/**
 * Interviewbit - PrimeSum
 */

function primeSum(n: number): number[] {
  const sieve: number[] = Array(n).fill(0);

  for (let i: number = 2; i * i < n; i = i + 1) {
    for (let j: number = i * i; j < n; j = j + i) {
      if (!sieve[i]) {
        sieve[j] = 1;
      }
    }
  }

  for (let i: number = 2; i < n; i = i + 1) {
    if (!sieve[i] && !sieve[n - i]) {
      return [i, n - i];
    }
  }

  return [];
}

export { primeSum };
