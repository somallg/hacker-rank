/**
 * Interviewbit - SpiralOrderMatrixIi
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
  array: number[][]
): number {
  const l = array.length;
  return {
    [UP]: currentX - 1 < 0 || array[currentX - 1][currentY] !== 0 ? RIGHT : UP,
    [RIGHT]:
      currentY + 1 >= l || array[currentX][currentY + 1] !== 0 ? DOWN : RIGHT,
    [DOWN]:
      currentX + 1 >= l || array[currentX + 1][currentY] !== 0 ? LEFT : DOWN,
    [LEFT]: currentY - 1 < 0 || array[currentX][currentY - 1] !== 0 ? UP : LEFT
  }[currentDirection];
}

function spiralOrderMatrixIi(n: number): number[][] {
  const result: number[][] = [[]];
  for (let i = 0; i < n; i = i + 1) {
    result[i] = Array(n).fill(0);
  }

  let direction: number = RIGHT;
  let x = 0;
  let y = 0;

  for (let i = 1; i <= n * n; i = i + 1) {
    result[x][y] = i;
    direction = getNextDirection(x, y, direction, result);
    const [opX, opY] = getOpFromDirection(direction);
    x = x + opX;
    y = y + opY;
  }

  return result;
}

export { spiralOrderMatrixIi };
