/**
 * LengthOfLastWord
 */

function lengthOfLastWord(s: string): number {
  const l = s.length;
  let i = l - 1;

  while (i >= 0 && s[i] === ' ') {
    i = i - 1;
  }

  let result = 0;
  while (i >= 0 && s[i] !== ' ') {
    result = result + 1;
    i = i - 1;
  }

  return result;
}

export { lengthOfLastWord };
