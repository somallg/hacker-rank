/**
 * MinimumCharactersRequiredToMakeAStringPalindromic
 */

function createLpsArray(s: string): number[] {
  const l = s.length;
  const lps = [];
  lps[0] = 0;

  let index = 0;
  let i = 1;

  while (i < l) {
    if (s[i] === s[index]) {
      lps[i] = index + 1;
      i += 1;
      index += 1;
    } else {
      if (index > 0) {
        index = lps[index - 1];
      } else {
        lps[i] = index;
        i += 1;
      }
    }
  }

  return lps;
}

function minimumCharactersRequiredToMakeAStringPalindromic(s: string): number {
  const combined = s.concat('&').concat(
    s
      .split('')
      .reverse()
      .join('')
  );
  const lps = createLpsArray(combined);

  return s.length - lps[lps.length - 1];
}

export { minimumCharactersRequiredToMakeAStringPalindromic };
