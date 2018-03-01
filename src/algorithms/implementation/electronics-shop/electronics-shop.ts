/**
 * @url https://www.hackerrank.com/challenges/electronics-shop/problem
 */

export function solveElectronicsShop(
  keyboards: number[],
  drives: number[],
  s: number
) {
  const filteredKeyboards = keyboards.filter(k => k < s);
  const filteredDrives = drives.filter(d => d < s);

  // filteredKeyboards = [1, 3], filteredDrives = [7, 8]
  return filteredKeyboards
    .map(k => filteredDrives.map(d => k + d)) // [[1 + 7], [1 + 8], [3 + 7], [3 + 8]]
    .reduce((acc, e) => acc.concat(e), []) // [8, 9, 10, 11]
    .filter(e => e <= s) // [8, 9, 10]
    .reduce((acc, e) => (acc > e ? acc : e), -1); // find max: 10
}
