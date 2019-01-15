/**
 * SumOfPairwiseHammingDistance
 */

/* tslint:disable:no-bitwise */
function sumOfPairwiseHammingDistance(array: number[]): number {
  const l: number = array.length;
  if (l <= 1) {
    return 0;
  }
  let sum: number = 0;
  const max: number = array.reduce((acc: number, a: number) =>
    Math.max(acc, a)
  );

  for (let i: number = 1; i <= max; i = i << 1) {
    const x: number = array.filter((a: number) => (a & i) === 0).length;
    const y: number = l - x;
    sum = sum + x * y * 2;
  }

  return sum % (10e8 + 7);
}

export { sumOfPairwiseHammingDistance };
