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

export { Stack };
