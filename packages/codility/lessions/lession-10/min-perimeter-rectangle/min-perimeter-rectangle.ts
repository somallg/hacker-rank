/**
 */

function getFactors(n: number): number[] {
  let i = 1;
  const result = [];

  for (i = 1; i * i < n; i = i + 1) {
    n % i === 0 && result.push(i);
  }

  i * i === n && result.push(i);

  return result;
}

function solveMinPerimeterRectangle(n: number): number {
  return getFactors(n)
    .map(factor => 2 * (factor + Math.floor(n / factor)))
    .reduce((acc, perimeter) => Math.min(acc, perimeter));
}

export { getFactors, solveMinPerimeterRectangle };
