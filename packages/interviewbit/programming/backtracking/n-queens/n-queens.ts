/**
 * Interviewbit - NQueens
 */

function generateBoard(n: number): string[][] {
  const board: string[][] = [];

  for (let i: number = 0; i < n; i = i + 1) {
    board[i] = Array(n).fill('.');
  }

  return board;
}

function isSafe(board: string[][], row: number, col: number): boolean {
  const l: number = board.length;

  // check ^ direction
  for (let i: number = row; i >= 0; i = i - 1) {
    if (board[i][col] === 'Q') {
      return false;
    }
  }

  // check left diagonals
  for (
    // tslint:disable-next-line
    let i: number = row, j: number = col;
    i >= 0 && j >= 0;
    i = i - 1, j = j - 1
  ) {
    if (board[i][j] === 'Q') {
      return false;
    }
  }

  // check right diagonals
  for (
    // tslint:disable-next-line
    let i: number = row, j: number = col;
    i >= 0 && j < l;
    i = i - 1, j = j + 1
  ) {
    if (board[i][j] === 'Q') {
      return false;
    }
  }

  return true;
}

function nQueens(n: number): string[][] {
  // tslint:disable-next-line
  function solveNQueensRec(board: string[][], row: number, n: number): boolean {
    if (row === n) {
      // tslint:disable-next-line
      result.push(board.map((row: string[]) => row.join('')));

      return true;
    }

    const l: number = board.length;

    for (let i: number = 0; i < l; i = i + 1) {
      if (isSafe(board, row, i)) {
        board[row][i] = 'Q';
        solveNQueensRec(board, row + 1, n);
        board[row][i] = '.';
      }
    }

    return false;
  }

  const board: string[][] = generateBoard(n);
  const result: string[][] = [];
  solveNQueensRec(board, 0, n);

  return result;
}

export { nQueens };
