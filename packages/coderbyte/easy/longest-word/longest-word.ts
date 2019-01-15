/**
 */

function solveLongestWord(sen: string): string {
  return sen
    .split(/\s+/)
    .map((word: string) => word.replace(/\W+/g, ''))
    .reduce(
      (acc: string, word: string) => (acc.length < word.length ? word : acc)
    );
}

export { solveLongestWord };
