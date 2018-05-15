/**
 */

class Stack<T> {
  storage: T[];
  length: number;

  constructor() {
    this.storage = [];
    this.length = 0;
  }

  push(e: T) {
    this.storage.push(e);
    this.length = this.length + 1;
  }

  pop(): T {
    this.length = Math.max(0, this.length - 1);
    const res = this.storage[this.length];
    this.storage.length = this.length;

    return res;
  }

  peek(): T {
    return this.storage[this.length - 1];
  }
}

function solveStoneWall(heights: number[]): number {
  const heightStack = new Stack<number>();
  const n = heights.length;
  let count = 0;

  if (!n) {
    return count;
  }

  heightStack.push(0);

  for (let i = 0; i < n; i = i + 1) {
    const currentHeight = heights[i];

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
