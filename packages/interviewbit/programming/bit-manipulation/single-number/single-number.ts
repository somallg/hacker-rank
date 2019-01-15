/**
 * SingleNumber
 */

function singleNumber(array: number[]): number {
  const l: number = array.length;

  if (l === 0) {
    return 0;
  } else if (l === 1) {
    return array[0];
  }

  return array.reduce((acc: number, e: number) => acc ^ e);
}

export { singleNumber };
