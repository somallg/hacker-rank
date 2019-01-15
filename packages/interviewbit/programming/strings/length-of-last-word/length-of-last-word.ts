/**
 * LengthOfLastWord
 */

function lengthOfLastWord(s: string): number {
  const l: number = s.length;
  let i: number = l - 1;

  while (i >= 0 && s[i] === ' ') {
    i = i - 1;
  }

  let result: number = 0;
  while (i >= 0 && s[i] !== ' ') {
    result = result + 1;
    i = i - 1;
  }

  return result;
}

export { lengthOfLastWord };
