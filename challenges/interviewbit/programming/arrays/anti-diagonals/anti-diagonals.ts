/**
 * Interviewbit - AntiDiagonals
 */

function antiDiagonals(array: number[][]): number[][] {
  const l = array.length;
  const result: number[][] = [];
  for (let i = 0; i < 2 * l - 1; i = i + 1) {
    result[i] = [];
  }

  for (let i = 0; i < l; i = i + 1) {
    for (let j = 0; j < l; j = j + 1) {
      result[i + j].push(array[i][j]);
    }
  }

  return result;
}

export { antiDiagonals };
