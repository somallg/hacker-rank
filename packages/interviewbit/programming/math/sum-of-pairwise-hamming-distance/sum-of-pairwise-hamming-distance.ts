/**
 * SumOfPairwiseHammingDistance
 */

/* tslint:disable:no-bitwise */
function sumOfPairwiseHammingDistance(array: number[]): number {
  const l = array.length;
  if (l <= 1) {
    return 0;
  }
  let sum = 0;
  const max = array.reduce((acc, a) => Math.max(acc, a));

  for (let i = 1; i <= max; i = i << 1) {
    const x = array.filter(a => (a & i) === 0).length;
    const y = l - x;
    sum = sum + 2 * x * y;
  }

  return sum % (10e8 + 7);
}

export { sumOfPairwiseHammingDistance };
