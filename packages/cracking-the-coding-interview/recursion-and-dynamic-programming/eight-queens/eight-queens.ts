/**
 * EightQueens
 */

function eightQueens(n: number): number {
  const matrix: number[][] = createMatrix(n);
  const result: string[] = [];

  placeQueens(0, n, matrix, result);

  return result.length;
}

function createMatrix(n: number): number[][] {
  return Array(n)
    .fill(n)
    .map((l: number) => Array(l).fill(0));
}

function placeQueens(row: number, n: number, matrix: number[][], result: string[]): void {
  if (row >= n) {
    // if we are here which means n-queens have been placed
    result.push(matrix.map((r: number[]) => r.toString()).join('\n'));

    return;
  }

  for (let col: number = 0; col < n; col += 1) {
    if (checkValid(matrix, row, col)) {
      // place queen
      matrix[row][col] = 1;
      placeQueens(row + 1, n, matrix, result);
      // remove queen
      matrix[row][col] = 0;
    }
  }
}

function checkValid(matrix: number[][], row: number, col: number): boolean {
  // check if any queen have been place in column col
  for (let i: number = row - 1; i >= 0; i -= 1) {
    if (matrix[i][col] === 1) {
      return false;
    }
  }

  // check diagonal any point that have distance between row and col equal to [row, col] is diagonal
  // diagonal
  // tslint:disable-next-line
  for (let i: number = row - 1, j: number = col - 1; i >= 0 && j >= 0; i -= 1, j -= 1) {
    if (matrix[i][j] === 1) {
      return false;
    }
  }

  // anti-diagonal
  // tslint:disable-next-line
  for (let i: number = row - 1, j: number = col + 1; i >= 0 && j < matrix.length; i -= 1, j += 1) {
    if (matrix[i][j] === 1) {
      return false;
    }
  }

  return true;
}

export { eightQueens };
