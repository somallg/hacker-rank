/**
 */

function solveCountFactors(n: number): number {
  let count: number = 0;
  let i: number;

  for (i = 1; i * i < n; i = i + 1) {
    if (n % i === 0) {
      count += 1;
    }
  }

  return i * i === n ? count * 2 + 1 : count * 2;
}

export { solveCountFactors };
