/**
 */
import { Stack } from '../stack';

function solveStoneWall(heights: number[]): number {
  const heightStack: Stack<number> = new Stack<number>();
  const n: number = heights.length;
  let count: number = 0;

  if (!n) {
    return count;
  }

  heightStack.push(0);

  for (let i: number = 0; i < n; i = i + 1) {
    const currentHeight: number = heights[i];

    while (heightStack.length > 0 && heightStack.peek() > currentHeight) {
      heightStack.pop();
    }

    if (heightStack.peek() !== currentHeight) {
      heightStack.push(currentHeight);
      count = count + 1;
    }
  }

  return count;
}

export { solveStoneWall };
