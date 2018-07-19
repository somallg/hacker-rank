/**
 * Interviewbit - RepeatAndMissingNumberArray
 */

function repeatAndMissingNumberArray(array: number[]): number[] {
  const l = array.length;
  if (l === 0) {
    return [];
  }

  const sumArray = array.reduce((acc, a) => acc + a);
  const sumUpToN = (l * (l + 1)) / 2;

  // b - a = diff
  const diff = sumUpToN - sumArray;
  const squareArray = array.map(a => a * a);
  const sumSquareArray = squareArray.reduce((acc, a) => acc + a);
  const sumUpToNSquare = Array(l)
    .fill(0)
    .map((_, index) => (index + 1) ** 2)
    .reduce((acc, a) => acc + a);
  // b ** 2 - a ** 2 = diffSquare => b + b = diffSquare / diff
  const diffSquare = sumUpToNSquare - sumSquareArray;
  const sumAB = diffSquare / diff;

  return [(sumAB + diff) / 2 - diff, (sumAB + diff) / 2];
}

export { repeatAndMissingNumberArray };
