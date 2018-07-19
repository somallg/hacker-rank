/**
 * Interviewbit - SetMatrixZeros
 */

function haveZeroInFirstRow(matrix: number[][]): boolean {
  for (let i = 0; i < matrix[0].length; i = i + 1) {
    if (matrix[0][i] === 0) {
      return true;
    }
  }

  return false;
}

function setAllZeroInFirstRow(matrix: number[][]): number[][] {
  for (let i = 0; i < matrix[0].length; i = i + 1) {
    matrix[0][i] = 0;
  }

  return matrix;
}

function haveZeroInFirstColumn(matrix: number[][]): boolean {
  for (let i = 0; i < matrix.length; i = i + 1) {
    if (matrix[i][0] === 0) {
      return true;
    }
  }

  return false;
}

function setAllZeroInFirstColumn(matrix: number[][]): number[][] {
  for (let i = 0; i < matrix.length; i = i + 1) {
    matrix[i][0] = 0;
  }

  return matrix;
}

function setInfoInFirstRowAndFirstColumn(matrix: number[][]): number[][] {
  for (let row = 1; row < matrix.length; row = row + 1) {
    for (let col = 1; col < matrix[row].length; col = col + 1) {
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }

  return matrix;
}

function setMatrixZeros(matrix: number[][]): number[][] {
  const zeroInFirstRow = haveZeroInFirstRow(matrix);
  const zeroInFirstColumn = haveZeroInFirstColumn(matrix);

  // tslint:disable-next-line
  matrix = setInfoInFirstRowAndFirstColumn(matrix);

  for (let row = 1; row < matrix.length; row = row + 1) {
    for (let col = 1; col < matrix[row].length; col = col + 1) {
      matrix[row][col] = matrix[0][col] === 1 && matrix[row][0] === 1 ? 1 : 0;
    }
  }

  if (zeroInFirstRow) {
    // tslint:disable-next-line
    matrix = setAllZeroInFirstRow(matrix);
  }

  if (zeroInFirstColumn) {
    // tslint:disable-next-line
    matrix = setAllZeroInFirstColumn(matrix);
  }

  return matrix;
}

export { setMatrixZeros };
