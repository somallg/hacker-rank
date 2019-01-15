/**
 * LongestCommonPrefix
 */

function longestCommonPrefix(strings: string[]): string {
  const len: number = strings.length;
  const minLen: number = strings
    .map((s: string) => s.length)
    .reduce((acc: number, a: number) => Math.min(acc, a));

  let i: number = 0;
  while (i < minLen) {
    for (let j: number = 0; j < len - 1; j += 1) {
      if (strings[j][i] !== strings[j + 1][i]) {
        return strings[0].slice(0, i);
      }
    }
    i += 1;
  }

  return strings[0].slice(0, i);
}

export { longestCommonPrefix };
