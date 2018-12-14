/**
 * StringCompression
 */

function countConsecutive(s: string, i: number): number {
  let index = i + 1;

  while (index < s.length && s[index] === s[i]) {
    index += 1;
  }

  return index - i;
}

function stringCompression(s: string): string {
  let compressedString = '';

  let i = 0;

  while (i < s.length) {
    const count = countConsecutive(s, i);
    compressedString += s[i] + count;

    i += count;
  }

  return compressedString.length < s.length ? compressedString : s;
}

export { stringCompression };
