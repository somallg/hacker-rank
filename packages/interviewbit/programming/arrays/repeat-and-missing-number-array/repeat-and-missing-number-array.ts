/**
 * Interviewbit - RepeatAndMissingNumberArray
 */

function repeatAndMissingNumberArray(array: number[]): number[] {
  const l: number = array.length;
  if (l === 0) {
    return [];
  }

  const sumArray: number = array.reduce((acc: number, a: number) => acc + a);
  const sumUpToN: number = (l * (l + 1)) / 2;

  // b - a = diff
  const diff: number = sumUpToN - sumArray;
  const squareArray: number[] = array.map((a: number) => a * a);
  const sumSquareArray: number = squareArray.reduce(
    (acc: number, a: number) => acc + a
  );
  const sumUpToNSquare: number = Array(l)
    .fill(0)
    .map((_: number, index: number) => (index + 1) ** 2)
    .reduce((acc: number, a: number) => acc + a);
  // b ** 2 - a ** 2 = diffSquare => b + b = diffSquare / diff
  const diffSquare: number = sumUpToNSquare - sumSquareArray;
  const sumAB: number = diffSquare / diff;

  return [(sumAB + diff) / 2 - diff, (sumAB + diff) / 2];
}

export { repeatAndMissingNumberArray };
