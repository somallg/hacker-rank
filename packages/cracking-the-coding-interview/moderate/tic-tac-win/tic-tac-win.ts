/**
 * TicTacWin
 */

enum Piece {
  EMPTY = 0,
  BLACK = 1,
  WHITE = 2
}

function ticTacWin(board: number[][]): Piece {
  const iterators: IterableIterator<number[]>[] = [];
  const size: number = board.length;

  for (let i = 0; i < size; i += 1) {
    // check cols
    iterators.push(generateCoors(0, i, 1, 0, size));
    // check rows
    iterators.push(generateCoors(i, 0, 0, 1, size));
  }
  iterators.push(generateCoors(0, 0, 1, 1, size));
  iterators.push(generateCoors(0, size - 1, 1, -1, size));

  for (const iterator of iterators) {
    const winner = hasWon(board, iterator);
    if (winner !== Piece.EMPTY) {
      return winner;
    }
  }

  return Piece.EMPTY;
}

function hasWon(board: number[][], iterator: IterableIterator<number[]>): Piece {
  // tslint:disable-next-line
  let {
    done,
    value: [row, col]
  } = iterator.next();
  const first = board[row][col];

  while (!done) {
    if (board[row][col] !== first) {
      return Piece.EMPTY;
    }

    ({ done, value: [row, col] = [NaN, NaN] } = iterator.next());
  }

  return first;
}

function* generateCoors(
  row: number,
  col: number,
  rowI: number,
  colI: number,
  size: number
): IterableIterator<number[]> {
  while (row >= 0 && row < size && col >= 0 && col < size) {
    yield [row, col];
    // tslint:disable-next-line
    row += rowI;
    // tslint:disable-next-line
    col += colI;
  }

  return;
}

export { ticTacWin };
