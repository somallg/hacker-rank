/**
 * Interviewbit - Sudoku
 */

function convertBoardToNumber(board: string[]): number[][] {
  return board.map((boardStr: string) =>
    boardStr.split('').map((n: string) => (n === '.' ? 0 : Number(n)))
  );
}

function getCellToSolve(board: number[][]): number[][] {
  const l: number = board.length;
  const result: number[][] = [];

  for (let i: number = 0; i < l; i = i + 1) {
    for (let j: number = 0; j < l; j = j + 1) {
      if (board[i][j] === 0) {
        result.push([i, j]);
      }
    }
  }

  return result;
}

function getPossibleMoves(
  row: number,
  col: number,
  board: number[][]
): number[] {
  const l: number = board.length;
  const moved: number[] = Array(l + 1).fill(0);

  // get all number in -> direction
  for (let i: number = 0; i < l; i = i + 1) {
    if (board[row][i] !== 0) {
      moved[board[row][i]] = 1;
    }
  }

  // get all number in ^ direction
  for (let i: number = 0; i < l; i = i + 1) {
    if (board[i][col] !== 0) {
      moved[board[i][col]] = 1;
    }
  }

  // get all number in same 3x3 cell
  const rowDiv3: number = Math.floor(row / 3) * 3;
  const colDiv3: number = Math.floor(col / 3) * 3;
  for (let i: number = rowDiv3; i < rowDiv3 + 3; i = i + 1) {
    for (let j: number = colDiv3; j < colDiv3 + 3; j = j + 1) {
      if (board[i][j] !== 0) {
        moved[board[i][j]] = 1;
      }
    }
  }

  const result: number[] = [];
  for (let i: number = 1; i <= 9; i = i + 1) {
    if (moved[i] === 0) {
      result.push(i);
    }
  }

  return result;
}

function sudoku(boardString: string[]): string[] {
  function solveSudoku(
    startIndex: number,
    // tslint:disable-next-line
    cellToSolve: number[][],
    board: number[][]
  ): boolean {
    if (startIndex >= cellToSolve.length) {
      result.push(
        board
          .map((r: number[]) => [r.join('')])
          .reduce((acc: string[], e: string[]) => acc.concat(e), [])
      );

      return true;
    }

    const [row, col]: number[] = cellToSolve[startIndex];
    const possibleMoves: number[] = getPossibleMoves(row, col, board);
    if (possibleMoves.length <= 0) {
      return false;
    }

    // tslint:disable-next-line
    for (let j: number = 0; j < possibleMoves.length; j = j + 1) {
      board[row][col] = possibleMoves[j];
      if (solveSudoku(startIndex + 1, cellToSolve, board)) {
        return true;
      }
      board[row][col] = 0;
    }

    return false;
  }

  const result: string[][] = [];
  const boardNumber: number[][] = convertBoardToNumber(boardString);
  const cellToSolve: number[][] = getCellToSolve(boardNumber);

  solveSudoku(0, cellToSolve, boardNumber);

  return result[0];
}

export { convertBoardToNumber, sudoku };
