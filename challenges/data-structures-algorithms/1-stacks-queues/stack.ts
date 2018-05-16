class Stack<T> {
  private capacity: number;
  private storage: { [key: string]: T };
  private length: number;

  constructor(capacity = Infinity) {
    this.storage = {};
    this.capacity = capacity;
    this.length = 0;
  }

  push(value: T): number | string {
    if (this.length < this.capacity) {
      // tslint:disable:no-increment-decrement
      this.storage[this.length++] = value;
      return this.length;
    }

    return 'Max capacity already reached. Remove element before adding a new one.';
  }

  pop(): T {
    const value = this.storage[--this.length];
    delete this.storage[this.length];

    if (this.length < 0) {
      this.length = 0;
    }

    return value;
  }

  peek(): T {
    return this.storage[this.length - 1];
  }

  count(): number {
    return this.length;
  }
}

export { Stack };
