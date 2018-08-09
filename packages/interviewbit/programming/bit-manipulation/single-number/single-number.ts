/**
 * SingleNumber
 */

function singleNumber(array: number[]): number {
  const l = array.length;

  if (l === 0) {
    return 0;
  } else if (l === 1) {
    return array[0];
  }

  return array.reduce((acc, e) => acc ^ e);
}

export { singleNumber };
