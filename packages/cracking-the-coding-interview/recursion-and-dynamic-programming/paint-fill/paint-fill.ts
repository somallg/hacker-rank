/**
 * PaintFill
 */

function paintFill(screen: number[][], coordination: number[], newColor: number): number[][] {
  const [row, col] = coordination;

  paintFillRec(row, col, screen, screen[row][col], newColor);

  return screen;
}

function paintFillRec(row: number, col: number, screen: number[][], oColor: number, nColor: number): void {
  if (row < 0 || row >= screen.length) {
    return;
  }

  if (col < 0 || col >= screen[0].length) {
    return;
  }

  if (screen[row][col] !== oColor) {
    return;
  }

  screen[row][col] = nColor;

  paintFillRec(row + 1, col, screen, oColor, nColor);
  paintFillRec(row - 1, col, screen, oColor, nColor);
  paintFillRec(row, col - 1, screen, oColor, nColor);
  paintFillRec(row, col + 1, screen, oColor, nColor);
}

export { paintFill };
