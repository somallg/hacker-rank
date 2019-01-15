type TestFn<T> = (
  search: number | undefined,
  nodeValue: T | number | undefined,
  index: number,
  current: Node<T>
) => boolean;

class Node<T> {
  public value: T;
  public next: Node<T> | undefined;

  constructor(value: T) {
    this.value = value;
  }
}

// tslint:disable-next-line
class LinkedList<T> {
  public tail: Node<T> | undefined;
  public head: Node<T> | undefined;
  public length: number;

  constructor() {
    this.tail = this.head = undefined;
    this.length = 0;
  }

  public push(value: T): void {
    const node: Node<T> = new Node(value);
    this.length = this.length + 1;
    if (!this.head) {
      this.head = node;
    } else if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
  }

  public pop(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    if (this.head === this.tail) {
      const node: Node<T> = this.head;
      this.head = this.tail = undefined;

      return node.value;
    }

    const penultimate: Node<T> | undefined = this._find(
      undefined,
      (value: number, nodeValue: number, i: number, current: Node<T>) =>
        current.next === this.tail
    );
    const ans: T | undefined =
      penultimate && penultimate.next ? penultimate.next.value : undefined;

    if (penultimate) {
      penultimate.next = undefined;
    }

    this.tail = penultimate;
    this.length -= 1;

    return ans;
  }

  // tslint:disable:function-name
  public _find(
    value: number | undefined,
    test: TestFn<T> = this.test
  ): Node<T> | undefined {
    let current: Node<T> | undefined = this.head;
    let i: number = 0;
    while (current) {
      if (test(value, current.value, i, current)) {
        return current;
      }
      current = current.next;
      i = i + 1;
    }

    return undefined;
  }

  // tslint:disable:no-reserved-keywords
  public get(index: number): T | undefined {
    const node: Node<T> | undefined = this._find(index, this.testIndex);
    if (!node) {
      return undefined;
    }

    return node.value;
  }

  // tslint:disable:no-reserved-keywords
  public delete(index: number): T | undefined {
    if (index === 0) {
      const head: Node<T> | undefined = this.head;
      if (head) {
        this.head = head.next;
      } else {
        this.head = undefined;
      }
      this.length -= 1;

      return head ? head.value : undefined;
    }

    const node: Node<T> | undefined = this._find(index - 1, this.testIndex);
    const excise: Node<T> | undefined = node ? node.next : undefined;

    if (!excise) {
      return undefined;
    }

    if (node) {
      node.next = excise.next;
    }

    if (node && node.next && !node.next.next) {
      this.tail = node.next;
    }

    this.length -= 1;

    return excise.value;
  }

  public test(
    search: number,
    nodeValue: number,
    index: number,
    current: Node<T>
  ): boolean {
    return search === nodeValue;
  }

  public testIndex(search: number, _: number, index: number): boolean {
    return search === index;
  }

  public serialize(): T[] {
    const ans: T[] = [];
    let current: Node<T> | undefined = this.head;
    if (!current) {
      return ans;
    }
    while (current) {
      ans.push(current.value);
      current = current.next;
    }

    return ans;
  }
}

export { LinkedList };
