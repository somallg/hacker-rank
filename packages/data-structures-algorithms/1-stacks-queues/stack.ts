class Stack<T> {
  private readonly capacity: number;
  private readonly storage: { [key: string]: T };
  private length: number;

  constructor(capacity = Infinity) {
    this.storage = {};
    this.capacity = capacity;
    this.length = 0;
  }

  public push(value: T): number | string {
    if (this.length < this.capacity) {
      // tslint:disable:no-increment-decrement
      this.storage[this.length++] = value;
      return this.length;
    }

    return 'Max capacity already reached. Remove element before adding a new one.';
  }

  public pop(): T {
    const value = this.storage[--this.length];
    delete this.storage[this.length];

    if (this.length < 0) {
      this.length = 0;
    }

    return value;
  }

  public peek(): T {
    return this.storage[this.length - 1];
  }

  public count(): number {
    return this.length;
  }
}

export { Stack };
