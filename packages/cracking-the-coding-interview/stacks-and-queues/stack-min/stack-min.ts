/**
 * StackMin
 */

class Stack<T> {
  private readonly data: T[];

  constructor() {
    this.data = [];
  }

  public push(value: T): void {
    this.data.push(value);
  }

  public pop(): T | undefined {
    return this.data.pop();
  }

  public peek(): T {
    return this.data[this.data.length - 1];
  }

  public isEmpty(): boolean {
    return this.data.length === 0;
  }
}

// tslint:disable-next-line
class StackWithMin extends Stack<NodeWithMin> {
  public pushValue(value: number): void {
    const newMin = Math.min(value, this.getMin());
    super.push(new NodeWithMin(value, newMin));
  }

  public getMin(): number {
    if (this.isEmpty()) {
      return Number.MAX_SAFE_INTEGER;
    }

    return this.peek().min;
  }
}

// tslint:disable-next-line
class NodeWithMin {
  public value: number;
  public min: number;

  constructor(value: number, min: number) {
    this.value = value;
    this.min = min;
  }
}

function stackMin(array: number[]): number {
  const stackWithMin = new StackWithMin();

  array.forEach(n => stackWithMin.pushValue(n));

  stackWithMin.pop();
  stackWithMin.pop();

  return stackWithMin.getMin();
}

export { stackMin };
