/**
 * @url https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
 */

export function solveDesignerPdfViewer(h: number[], word: string): number {
  // map word to index array array
  const charCodeArray: number[] = word
    .split('')
    .map((e: string) => e.charCodeAt(0) - 'a'.charCodeAt(0)); // => 012

  const maxHeight: number = h
    .filter((_: number, i: number) => charCodeArray.indexOf(i) !== -1) // find word index array in h with matching index => 1 3 1
    .reduce((a: number, b: number) => (a > b ? a : b), -1); // find max height

  return maxHeight * word.length;
}
