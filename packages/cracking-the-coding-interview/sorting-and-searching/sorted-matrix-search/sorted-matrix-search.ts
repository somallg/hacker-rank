/**
 * SortedMatrixSearch
 */

class Coordinate {
  public row: number;
  public col: number;

  constructor(row: number, col: number) {
    this.setCoor(row, col);
  }

  public isInbound(matrix: number[][]): boolean {
    return this.row >= 0 && this.row <= matrix.length - 1 && this.col >= 0 && this.col <= matrix[0].length - 1;
  }

  public isBefore(other: Coordinate): boolean {
    return this.row <= other.row && this.col <= other.col;
  }

  public setToAverage(start: Coordinate, end: Coordinate): void {
    this.row = (start.row + end.row) >>> 1;
    this.col = (start.col + end.col) >>> 1;
  }

  public setCoor(row: number, col: number): void {
    this.row = row;
    this.col = col;
  }

  public clone(): Coordinate {
    return new Coordinate(this.row, this.col);
  }
}

function sortedMatrixSearch(matrix: number[][], target: number): number[] {
  return findElements(matrix, new Coordinate(0, 0), new Coordinate(matrix.length - 1, matrix[0].length - 1), target);
}

function findElements(matrix: number[][], startOrigin: Coordinate, endOrigin: Coordinate, target: number): number[] {
  if (!startOrigin.isInbound(matrix) || !endOrigin.isInbound(matrix)) {
    return [];
  }

  if (matrix[startOrigin.row][startOrigin.col] === target) {
    return [startOrigin.row, startOrigin.col];
  }

  if (!startOrigin.isBefore(endOrigin)) {
    return [];
  }

  const start = startOrigin.clone();
  const diagDist = Math.min(endOrigin.row - startOrigin.row, endOrigin.col - startOrigin.col);
  const end = new Coordinate(start.row + diagDist, start.col + diagDist);

  const middle = new Coordinate(0, 0);

  while (start.isBefore(end)) {
    middle.setToAverage(start, end);
    if (target > matrix[middle.row][middle.col]) {
      start.setCoor(middle.row + 1, middle.col + 1);
    } else {
      end.setCoor(middle.row - 1, middle.col - 1);
    }
  }

  // parition the matrix into 4 parts and search for upper right and lower left;
  return partitionAndSearch(matrix, startOrigin, endOrigin, start, target);
}

function partitionAndSearch(
  matrix: number[][],
  startOrigin: Coordinate,
  endOrigin: Coordinate,
  pivot: Coordinate,
  target: number
): number[] {
  const lowerLeftStart = new Coordinate(pivot.row, startOrigin.col);
  const lowerLeftEnd = new Coordinate(endOrigin.row, pivot.col - 1);

  const upperRightStart = new Coordinate(startOrigin.row, pivot.col);
  const upperRightEnd = new Coordinate(pivot.row - 1, endOrigin.col);

  const lowerLeft = findElements(matrix, lowerLeftStart, lowerLeftEnd, target);

  if (lowerLeft.length === 0) {
    return findElements(matrix, upperRightStart, upperRightEnd, target);
  }

  return lowerLeft;
}

export { sortedMatrixSearch };
