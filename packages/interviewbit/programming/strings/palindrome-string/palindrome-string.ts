/**
 * PalindromeString
 */

function palindromeString(s: string): number {
  // tslint:disable-next-line
  s = s.replace(/\W/g, '').toLowerCase();

  const l: number = s.length;
  const mid: number = l >>> 1;

  if (l === 0) {
    return 1;
  }

  for (let i: number = 0; i <= mid; i = i + 1) {
    if (s[i] !== s[l - i - 1]) {
      return 0;
    }
  }

  return 1;
}

export { palindromeString };
