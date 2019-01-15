/**
 * Interviewbit - AntiDiagonals
 */

function antiDiagonals(array: number[][]): number[][] {
  const l: number = array.length;
  const result: number[][] = [];
  for (let i: number = 0; i < l * 2 - 1; i = i + 1) {
    result[i] = [];
  }

  for (let i: number = 0; i < l; i = i + 1) {
    for (let j: number = 0; j < l; j = j + 1) {
      result[i + j].push(array[i][j]);
    }
  }

  return result;
}

export { antiDiagonals };
