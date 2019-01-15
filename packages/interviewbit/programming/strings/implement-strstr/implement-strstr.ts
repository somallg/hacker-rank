/**
 * ImplementStrstr
 */

function computeLpsArray(pattern: string): number[] {
  const l: number = pattern.length;
  const lps: number[] = [];
  lps[0] = 0;

  let index: number = 0;
  let i: number = 1;

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
  const n: number = text.length;
  const m: number = pattern.length;

  const lps: number[] = computeLpsArray(pattern);

  let i: number = 0;
  let j: number = 0;
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
