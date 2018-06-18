/**
 * Hackerearth - NQueens
 */

function generateBoard(n: number) {
  const board: number[][] = [];

  for (let i = 0; i < n; i = i + 1) {
    board[i] = Array(n).fill(0);
  }

  return board;
}

function isSafe(board: number[][], row: number, col: number): boolean {
  const l = board.length;

  // check ^ direction
  for (let i = row; i >= 0; i = i - 1) {
    if (board[i][col] === 1) {
      return false;
    }
  }

  // check left diagonals
  for (let i = row, j = col; i >= 0 && j >= 0; i = i - 1, j = j - 1) {
    if (board[i][j] === 1) {
      return false;
    }
  }

  // check right diagonals
  for (let i = row, j = col; i >= 0 && j < l; i = i - 1, j = j + 1) {
    if (board[i][j] === 1) {
      return false;
    }
  }

  return true;
}

function solveNQueensRec(board: number[][], row: number, n: number): boolean {
  if (row === n) {
    return true;
  }

  const l = board.length;

  for (let i = 0; i < l; i = i + 1) {
    if (isSafe(board, row, i)) {
      board[row][i] = 1;
      if (solveNQueensRec(board, row + 1, n)) {
        return true;
      }
      board[row][i] = 0;
    }
  }

  return false;
}

function solveNQueens(board: number[][], n: number): string {
  if (solveNQueensRec(board, 0, n)) {
    return board.map(row => row.join(' ')).join('\n');
  }

  return 'Not possible';
}

export { generateBoard, solveNQueens };
