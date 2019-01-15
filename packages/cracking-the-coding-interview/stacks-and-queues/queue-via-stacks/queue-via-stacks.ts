/**
 * QueueViaStacks
 */

import { Stack } from '../stack';

class MyQueue<T> {
  private readonly s1: Stack<T>;
  private readonly s2: Stack<T>;

  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  public add(item: T): void {
    this.s1.push(item);
  }

  public remove(): T | undefined {
    this.transferStacks();

    return this.s2.pop();
  }

  public peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    this.transferStacks();

    return this.s2.peek();
  }

  public isEmpty(): boolean {
    return this.s1.isEmpty() && this.s2.isEmpty();
  }

  private transferStacks(): void {
    if (this.s2.isEmpty()) {
      while (!this.s1.isEmpty()) {
        this.s2.push(this.s1.pop());
      }
    }
  }
}

function queueViaStacks(array: number[]): number | undefined {
  const myQueue: MyQueue<number> = new MyQueue<number>();

  array.forEach((n: number) => myQueue.add(n));

  myQueue.remove();
  myQueue.remove();

  return myQueue.peek();
}

export { queueViaStacks };
