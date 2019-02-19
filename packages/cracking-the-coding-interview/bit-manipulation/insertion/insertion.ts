function insertion(n: number, m: number, i: number, j: number): number {
  const nCleared: number = clearBitFromTo(n, i, j);
  const mShifted: number = m << i;

  return merge(nCleared, mShifted);
}

function clearBitFromTo(n: number, i: number, j: number): number {
  const allOnes: number = ~0;

  const leftOnes: number = allOnes << (j + 1);
  const rightOnes: number = (1 << i) - 1;

  const mask: number = leftOnes | rightOnes;

  return n & mask;
}

function merge(n: number, m: number): number {
  return n | m;
}

export { insertion };
