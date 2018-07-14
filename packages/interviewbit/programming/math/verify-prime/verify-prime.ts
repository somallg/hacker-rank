/**
 * Interviewbit - VerifyPrime
 */

function verifyPrime(n: number): number {
  if (n <= 1) {
    return 0;
  }

  for (let i = 2; i * i <= n; i = i + 1) {
    if (n % i === 0) {
      return 0;
    }
  }

  return 1;
}

export { verifyPrime };
