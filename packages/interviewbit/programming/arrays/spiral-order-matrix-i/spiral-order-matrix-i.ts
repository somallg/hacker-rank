/**
 * Interviewbit - SpiralOrderMatrixI
 */
const UP = 0;
const RIGHT = 1;
const DOWN = 2;
const LEFT = 3;

function getOpFromDirection(direction: number): number[] {
  return {
    [UP]: [-1, 0],
    [RIGHT]: [0, 1],
    [DOWN]: [1, 0],
    [LEFT]: [0, -1]
  }[direction];
}

function getNextDirection(
  currentX: number,
  currentY: number,
  currentDirection: number,
  matrix: number[][]
): number {
  const n = matrix.length;
  const m = matrix[0].length;
  return {
    [UP]: currentX - 1 < 0 || matrix[currentX - 1][currentY] === 0 ? RIGHT : UP,
    [RIGHT]:
      currentY + 1 >= m || matrix[currentX][currentY + 1] === 0 ? DOWN : RIGHT,
    [DOWN]:
      currentX + 1 >= n || matrix[currentX + 1][currentY] === 0 ? LEFT : DOWN,
    [LEFT]: currentY - 1 < 0 || matrix[currentX][currentY - 1] === 0 ? UP : LEFT
  }[currentDirection];
}

function spiralOrderMatrixI(matrix: number[][]): number[] {
  const n = matrix.length;
  const m = matrix[0].length;
  const result: number[] = [];

  let direction: number = RIGHT;
  let x = 0;
  let y = 0;

  for (let i = 1; i <= n * m; i = i + 1) {
    result.push(matrix[x][y]);
    matrix[x][y] = 0;
    direction = getNextDirection(x, y, direction, matrix);
    const [opX, opY] = getOpFromDirection(direction);
    x = x + opX;
    y = y + opY;
  }

  return result;
}

export { spiralOrderMatrixI };
