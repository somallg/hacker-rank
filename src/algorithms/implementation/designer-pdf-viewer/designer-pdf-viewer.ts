/**
 * @url https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
 */

export function solveDesignerPdfViewer(h: number[], word: string) {
  // map word to index array array
  const charCodeArray = word
    .split('')
    .map(e => e.charCodeAt(0) - 'a'.charCodeAt(0)); // => 012
  const maxHeight = h
    .filter((_, i) => charCodeArray.indexOf(i) !== -1) // find word index array in h with matching index => 1 3 1
    .reduce((a, b) => (a > b ? a : b), -1); // find max height

  return maxHeight * word.length;
}
