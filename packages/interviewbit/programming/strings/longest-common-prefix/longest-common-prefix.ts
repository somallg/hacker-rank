/**
 * LongestCommonPrefix
 */

function longestCommonPrefix(strings: string[]): string {
  const len = strings.length;
  const minLen = strings
    .map(s => s.length)
    .reduce((acc, a) => Math.min(acc, a));

  let i = 0;
  while (i < minLen) {
    for (let j = 0; j < len - 1; j += 1) {
      if (strings[j][i] !== strings[j + 1][i]) {
        return strings[0].slice(0, i);
      }
    }
    i += 1;
  }

  return strings[0].slice(0, i);
}

export { longestCommonPrefix };
