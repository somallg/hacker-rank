/**
 */

function getFactors(n: number): number[] {
  let i: number;
  const result: number[] = [];

  for (i = 1; i * i < n; i = i + 1) {
    if (n % i === 0) {
      result.push(i);
    }
  }

  if (i * i === n) {
    result.push(i);
  }

  return result;
}

function solveMinPerimeterRectangle(n: number): number {
  return getFactors(n)
    .map((factor: number) => (factor + Math.floor(n / factor)) * 2)
    .reduce((acc: number, perimeter: number) => Math.min(acc, perimeter));
}

export { getFactors, solveMinPerimeterRectangle };
