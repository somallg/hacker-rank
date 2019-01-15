class Stack<T> {
  public storage: T[];
  public length: number;

  constructor() {
    this.storage = [];
    this.length = 0;
  }

  public push(e: T): void {
    this.storage.push(e);
    this.length = this.length + 1;
  }

  public pop(): T {
    this.length = Math.max(0, this.length - 1);
    const res: T = this.storage[this.length];
    this.storage.length = this.length;

    return res;
  }

  public peek(): T {
    return this.storage[this.length - 1];
  }
}

export { Stack };
