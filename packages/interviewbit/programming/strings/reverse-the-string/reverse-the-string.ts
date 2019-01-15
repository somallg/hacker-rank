/**
 * ReverseTheString
 */

const SPC: string = ' ';

function reverseTheString(s: string): string {
  const l: number = s.length;
  let i: number = l - 1;
  let result: string = '';

  while (i >= 0) {
    while (i >= 0 && s[i] === SPC) {
      i = i - 1;
    }
    let j: number = i;
    while (j >= 0 && s[j] !== SPC) {
      j = j - 1;
    }
    result = `${result} ${s.substr(j + 1, i - j)}`;
    i = j;
  }

  return result.trim();
}

export { reverseTheString };
