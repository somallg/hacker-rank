class Node {
  public value: any;
  public left: Node | null;
  public right: Node | null;

  constructor(value: any, left = null, right = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

// tslint:disable-next-line
class Tree {
  public root: Node | null;

  constructor() {
    this.root = null;
  }

  public add(value: any): void {
    if (this.root === null) {
      this.root = new Node(value);
      return value;
    }

    let current = this.root;

    while (true) {
      if (current.value > value) {
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

  public toObject(): Node {
    return this.root || new Node(0);
  }
}

export { Tree };
