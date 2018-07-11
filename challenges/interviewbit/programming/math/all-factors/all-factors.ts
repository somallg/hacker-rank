/**
 * Interviewbit - AllFactors
 */

function allFactors(n: number): number[] {
  if (n <= 0) {
    return [0];
  }

  const factors = [];
  const oppositeFactors = [];

  for (let i = 1; i * i <= n; i = i + 1) {
    if (n % i === 0) {
      factors.push(i);
      if (i !== n / i) {
        oppositeFactors.push(n / i);
      }
    }
  }

  return [...factors, ...oppositeFactors.reverse()];
}

export { allFactors };
