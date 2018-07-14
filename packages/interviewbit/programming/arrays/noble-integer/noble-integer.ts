/**
 * Interviewbit - NobleInteger
 */

function nobleInteger(array: number[]): number {
  const l = array.length;
  if (l === 0) {
    return -1;
  }
  array.sort((a, b) => a - b);

  for (let i = 0; i < l; i = i + 1) {
    const p = array[i];
    let j = i + 1;
    // skip all duplicate of p;
    while (j < l && array[j] === p) {
      j = j + 1;
    }
    // calculate nb greater than p
    const nbGreaterThanP = l - j;
    if (nbGreaterThanP === p) {
      return 1;
    }
  }

  return -1;
}

export { nobleInteger };
