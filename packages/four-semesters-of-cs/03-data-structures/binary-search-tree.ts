class Node<T> {
  public value: T | undefined;
  public left: Node<T> | undefined;
  public right: Node<T> | undefined;

  constructor(
    value?: T,
    left?: Node<T> | undefined,
    right?: Node<T> | undefined
  ) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

// tslint:disable-next-line
class Tree<T> {
  public root: Node<T> | undefined;

  public add(value: T): void {
    if (this.root === undefined) {
      this.root = new Node(value);

      return;
    }

    let current: Node<T> = this.root;

    // tslint:disable:no-constant-condition
    while (true) {
      if (current.value && current.value > value) {
        // go left
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(value);
          break;
        }
      } else {
        // go right
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(value);
          break;
        }
      }
    }
  }

  public toObject(): Node<T> {
    return this.root || new Node();
  }
}

export { Node, Tree };
