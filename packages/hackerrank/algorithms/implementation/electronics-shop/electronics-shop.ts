/**
 * @url https://www.hackerrank.com/challenges/electronics-shop/problem
 */

export function solveElectronicsShop(
  keyboards: number[],
  drives: number[],
  s: number
): number {
  const filteredKeyboards: number[] = keyboards.filter((k: number) => k < s);
  const filteredDrives: number[] = drives.filter((d: number) => d < s);

  // filteredKeyboards = [1, 3], filteredDrives = [7, 8]
  return filteredKeyboards
    .map((k: number) => filteredDrives.map((d: number) => k + d)) // [[1 + 7], [1 + 8], [3 + 7], [3 + 8]]
    .reduce((acc: number[], e: number[]) => acc.concat(e), []) // [8, 9, 10, 11]
    .filter((e: number) => e <= s) // [8, 9, 10]
    .reduce((acc: number, e: number) => (acc > e ? acc : e), -1); // find max: 10
}
