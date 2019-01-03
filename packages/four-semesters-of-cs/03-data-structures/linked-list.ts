class Node {
  public value: any;
  public next: Node | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

// tslint:disable-next-line
class LinkedList {
  public tail: Node | null;
  public head: Node | null;
  public length: number;

  constructor() {
    this.tail = this.head = null;
    this.length = 0;
  }

  public push(value: any): void {
    const node = new Node(value);
    this.length = this.length + 1;
    if (!this.head) {
      this.head = node;
    } else if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
  }

  public pop(): Node | null {
    if (!this.head) {
      return null;
    }

    if (this.head === this.tail) {
      const node = this.head;
      this.head = this.tail = null;
      return node.value;
    }

    const penultimate = this._find(
      null,
      (value, nodeValue, i, current) => current.next === this.tail
    );
    const ans = penultimate && penultimate.next ? penultimate.next.value : null;

    if (penultimate) {
      penultimate.next = null;
    }

    this.tail = penultimate;
    this.length--;
    return ans;
  }

  public _find(value: any, test = this.test) {
    let current = this.head;
    let i = 0;
    while (current) {
      if (test(value, current.value, i, current)) {
        return current;
      }
      current = current.next;
      i = i + 1;
    }
    return null;
  }

  public get(index: number): any {
    const node = this._find(index, this.testIndex);
    if (!node) {
      return null;
    }
    return node.value;
  }

  public delete(index: number): any {
    if (index === 0) {
      const head = this.head;
      if (head) {
        this.head = head.next;
      } else {
        this.head = null;
      }
      this.length--;

      return head ? head.value : 0;
    }

    const node = this._find(index - 1, this.testIndex);
    const excise = node ? node.next : null;

    if (!excise) {
      return null;
    }

    if (node) {
      node.next = excise.next;
    }

    if (node && node.next && !node.next.next) {
      this.tail = node.next;
    }

    this.length--;
    return excise.value;
  }

  public test(search: any, nodeValue: any, index: number, current: Node) {
    return search === nodeValue;
  }

  public testIndex(search: any, _: any, i: any): boolean {
    return search === i;
  }

  public serialize(): any {
    const ans: any = [];
    let current = this.head;
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
