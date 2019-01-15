class LinkedListNode {
  public next: LinkedListNode | undefined;
  public data: number;

  constructor(data: number) {
    this.data = data;
  }
}

export { LinkedListNode };
