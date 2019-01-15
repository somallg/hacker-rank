/**
 * Interviewbit - NobleInteger
 */

function nobleInteger(array: number[]): number {
  const l: number = array.length;
  if (l === 0) {
    return -1;
  }
  array.sort((a: number, b: number) => a - b);

  for (let i: number = 0; i < l; i = i + 1) {
    const p: number = array[i];
    let j: number = i + 1;
    // skip all duplicate of p;
    while (j < l && array[j] === p) {
      j = j + 1;
    }
    // calculate nb greater than p
    const nbGreaterThanP: number = l - j;
    if (nbGreaterThanP === p) {
      return 1;
    }
  }

  return -1;
}

export { nobleInteger };
