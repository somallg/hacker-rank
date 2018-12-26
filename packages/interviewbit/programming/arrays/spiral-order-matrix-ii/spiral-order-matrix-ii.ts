/**
 * Interviewbit - SpiralOrderMatrixIi
 */

const UP = 0;
const RIGHT = 1;
const DOWN = 2;
const LEFT = 3;

function canAdvance(
  [x, y]: number[],
  direction: number,
  matrix: number[][]
): boolean {
  const [newX, newY] = getNextCoor([x, y], direction);

  if (matrix[newX] === undefined || matrix[newX][newY] === undefined) {
    return false;
  }

  return matrix[newX][newY] === 0;
}

function getNextCoor(
  [x, y]: [number, number],
  direction: number
): [number, number] {
  return {
    [RIGHT]: [x, y + 1],
    [DOWN]: [x + 1, y],
    [LEFT]: [x, y - 1],
    [UP]: [x - 1, y]
  }[direction];
}

function changeDirection(currentDirection: number): number {
  return {
    [UP]: RIGHT,
    [RIGHT]: DOWN,
    [DOWN]: LEFT,
    [LEFT]: UP
  }[currentDirection];
}

function spiralOrderMatrixIi(n: number): number[][] {
  const result: number[][] = [[]];
  for (let i = 0; i < n; i = i + 1) {
    result[i] = Array(n).fill(0);
  }

  let direction: number = RIGHT;
  let row = 0;
  let col = 0;

  for (let i = 1; i <= n * n; i = i + 1) {
    result[row][col] = i;
    if (!canAdvance([row, col], direction, result)) {
      direction = changeDirection(direction);
    }

    [row, col] = getNextCoor([row, col], direction);
  }

  return result;
}

export { spiralOrderMatrixIi };
