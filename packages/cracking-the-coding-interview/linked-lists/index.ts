class LinkedListNode {
  public next: LinkedListNode | null;
  public data: number;

  constructor(data: number) {
    this.next = null;
    this.data = data;
  }
}

export { LinkedListNode };
