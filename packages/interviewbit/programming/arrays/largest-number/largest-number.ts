/**
 * Interviewbit - LargestNumber
 */

function largestNumber(array: number[]): string {
  const l: number = array.length;
  if (l === 0) {
    return '';
  }

  // extreme case all 0s
  const allZeros: boolean = array.every((n: number) => n === 0);
  if (allZeros) {
    return '0';
  }

  const arrayString: number[] = array.sort((a: number, b: number) => {
    const aFirst: number = Number(`${a}${b}`);
    const bFirst: number = Number(`${b}${a}`);

    return bFirst - aFirst;
  });

  return arrayString.join('');
}

export { largestNumber };
