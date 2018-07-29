/**
 * ReverseTheString
 */

const SPC = ' ';

function reverseTheString(s: string): string {
  const l = s.length;
  let i = l - 1;
  let result = '';

  while (i >= 0) {
    while (i >= 0 && s[i] === SPC) {
      i = i - 1;
    }
    let j = i;
    while (j >= 0 && s[j] !== SPC) {
      j = j - 1;
    }
    result = `${result} ${s.substr(j + 1, i - j)}`;
    i = j;
  }

  return result.trim();
}

export { reverseTheString };
