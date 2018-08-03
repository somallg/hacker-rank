/**
 * ImplementStrstr
 */

function computeLpsArray(pattern: string): number[] {
  const l = pattern.length;
  const lps = [];
  lps[0] = 0;

  let index = 0;
  let i = 1;

  while (i < l) {
    if (pattern[i] === pattern[index]) {
      lps[i] = index + 1;
      index += 1;
      i += 1;
    } else {
      if (index !== 0) {
        index = lps[index - 1];
      } else {
        lps[i] = index;
        i += 1;
      }
    }
  }

  return lps;
}

function implementStrstr(text: string, pattern: string): number {
  const n = text.length;
  const m = pattern.length;

  const lps = computeLpsArray(pattern);

  let i = 0;
  let j = 0;
  while (i < n) {
    if (pattern[j] === text[i]) {
      j += 1;
      i += 1;
    }

    if (j === m) {
      return i - j;
    } else if (i < n && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i += 1;
      }
    }
  }

  return -1;
}

export { implementStrstr };
