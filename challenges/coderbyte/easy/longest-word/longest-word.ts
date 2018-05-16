/**
 */

function solveLongestWord(sen: string) {
  return sen
    .split(/\s+/)
    .map(word => word.replace(/\W+/g, ''))
    .reduce((acc, word) => (acc.length < word.length ? word : acc));
}

export { solveLongestWord };
