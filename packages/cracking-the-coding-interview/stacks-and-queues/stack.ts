class Stack<T> {
  private readonly data: T[];

  constructor() {
    this.data = [];
  }

  public push(value: T | undefined): void {
    if (value) {
      this.data.push(value);
    }
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

export { Stack };
