/**
 */

function solveCountFactors(n: number): number {
  let count = 0;
  let i = 1;

  for (i = 1; i * i < n; i = i + 1) {
    n % i === 0 && (count = count + 1);
  }

  return i * i === n ? 2 * count + 1 : count * 2;
}

export { solveCountFactors };
