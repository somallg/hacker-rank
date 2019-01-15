/**
 * StackMin
 */
import { Stack } from '../stack';

// tslint:disable-next-line
class StackWithMin extends Stack<number> {
  private minStack: Stack<number>;

  constructor() {
    super();
    this.minStack = new Stack();
  }

  public push(value: number): void {
    if (value <= this.getMin()) {
      this.minStack.push(value);
    }

    super.push(value);
  }

  public pop(): number | undefined {
    const value: number | undefined = super.pop();

    if (value === this.minStack.peek()) {
      this.minStack.pop();
    }

    return value;
  }

  public getMin(): number {
    if (this.isEmpty()) {
      return Number.MAX_SAFE_INTEGER;
    }

    return this.minStack.peek();
  }
}

function stackMin(array: number[]): number {
  const stackWithMin: StackWithMin = new StackWithMin();

  array.forEach((n: number) => stackWithMin.push(n));

  stackWithMin.pop();
  stackWithMin.pop();

  return stackWithMin.getMin();
}

export { stackMin };
