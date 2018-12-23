/**
 * SortStack
 */

import { Stack } from '../stack';

class SortStack {
  private s: Stack<number>;

  constructor(array: number[]) {
    this.s = new Stack<number>();

    array.forEach(n => this.s.push(n));
  }

  public sort(): void {
    const r: Stack<number> = new Stack<number>();

    while (!this.s.isEmpty()) {
      const tmp = this.s.pop() || 0;

      while (!r.isEmpty() && r.peek() > tmp) {
        this.s.push(r.pop());
      }
      r.push(tmp);
    }

    while (!r.isEmpty()) {
      this.s.push(r.pop());
    }
  }

  public getSortedArray(): number[] {
    const result: number[] = [];

    while (!this.s.isEmpty()) {
      result.push(this.s.pop() || 0);
    }

    return result;
  }
}

function sortStack(array: number[]): number[] {
  const stack = new SortStack(array);

  stack.sort();

  return stack.getSortedArray();
}

export { sortStack };
