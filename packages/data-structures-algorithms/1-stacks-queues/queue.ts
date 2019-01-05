class Queue<T> {
  private readonly capacity: number;
  private readonly storage: { [key: string]: T };
  private head: number;
  private tail: number;

  constructor(capacity = Infinity) {
    this.storage = {};
    this.capacity = capacity;
    this.tail = 0;
    this.head = 0;
  }

  public enqueue(value: T): number | string {
    if (this.tail < this.capacity) {
      // tslint:disable:no-increment-decrement
      this.storage[this.tail++] = value;
      return this.count();
    }

    return 'Max capacity already reached. Remove element before adding a new one.';
  }

  public dequeue(): T {
    const value = this.storage[this.head];
    delete this.storage[this.head];

    if (this.head < this.tail) {
      this.head = this.head + 1;
    }

    return value;
  }

  public peek(): T {
    return this.storage[this.head];
  }

  public count(): number {
    return this.tail - this.head;
  }
}

export { Queue };
