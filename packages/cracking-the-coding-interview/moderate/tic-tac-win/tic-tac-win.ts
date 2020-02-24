/**
 * TicTacWin
 */

enum Piece {
  EMPTY = 0,
  BLACK = 1,
  WHITE = 2
}

function ticTacWin(board: number[][]): Piece {
  const intructions: Check[] = [];
  const size: number = board.length;

  for (let i = 0; i < size; i += 1) {
    // check cols
    intructions.push(new Check(0, i, 1, 0));
    // check rows
    intructions.push(new Check(i, 0, 0, 1));
  }
  intructions.push(new Check(0, 0, 1, 1));
  intructions.push(new Check(0, size - 1, 1, -1));

  for (const intruction of intructions) {
    const winner = hasWon(board, intruction);
    if (winner !== Piece.EMPTY) {
      return winner;
    }
  }

  return Piece.EMPTY;
}

function hasWon(board: number[][], intruction: Check): Piece {
  const first = board[intruction.row][intruction.col];

  while (intruction.inBound(board.length)) {
    if (board[intruction.row][intruction.col] !== first) {
      return Piece.EMPTY;
    }

    intruction.increment();
  }

  return first;
}

// tslint:disable-next-line
class Check {
  public row: number;
  public col: number;
  public rowI: number;
  public colI: number;

  constructor(row: number, col: number, rowI: number, colI: number) {
    this.row = row;
    this.col = col;
    this.rowI = rowI;
    this.colI = colI;
  }

  public increment(): void {
    this.row += this.rowI;
    this.col += this.colI;
  }

  public inBound(size: number): boolean {
    return this.row >= 0 && this.row < size && this.col >= 0 && this.col < size;
  }
}

export { ticTacWin };
