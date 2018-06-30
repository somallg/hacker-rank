/**
 * Interviewbit - LargestNumber
 */

function largestNumber(array: number[]): string {
  const l = array.length;
  if (l === 0) {
    return '';
  }

  // extreme case all 0s
  const allZeros = array.every(n => n === 0);
  if (allZeros) {
    return '0';
  }

  const arrayString = array.map(a => `${a}`).sort((a, b) => {
    const aFirst = Number(`${a}${b}`);
    const bFirst = Number(`${b}${a}`);

    return bFirst - aFirst;
  });

  return arrayString.join('');
}

export { largestNumber };
