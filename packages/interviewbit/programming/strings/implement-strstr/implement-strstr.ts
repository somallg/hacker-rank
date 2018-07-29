/**
 * ImplementStrstr
 */

function implementStrstr(a: string, b: string): number {
  const lenA = a.length;
  const lenB = b.length;
  if (lenA === 0 || lenB === 0 || lenA < lenB) {
    return -1;
  }

  let i = 0;
  while (i < lenA) {
    let j = i;
    while (j - i < lenB && a[j] === b[j - i]) {
      j = j + 1;
    }
    if (j - i === lenB) {
      return i;
    }
    i = i + 1;
  }

  return -1;
}

export { implementStrstr };
