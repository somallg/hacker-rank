/**
 * RandomNode
 */

class TreeNode {
  public data: number;
  public left: TreeNode;
  public right: TreeNode;
  public size: number;

  constructor(data: number) {
    this.data = data;
    this.size = 1;
  }

  public insertInOrder(data: number): void {
    if (data < this.data) {
      if (this.left === undefined) {
        this.left = new TreeNode(data);
      } else {
        this.left.insertInOrder(data);
      }
    } else {
      if (this.right === undefined) {
        this.right = new TreeNode(data);
      } else {
        this.right.insertInOrder(data);
      }
    }
    this.size += 1;
  }

  public getRandomNode(): TreeNode {
    // tslint:disable-next-line
    const index: number = Math.floor(Math.random() * this.size); // generate number from 0 to n (inclusive)

    return this.getIthNode(index);
  }

  public getIthNode(i: number): TreeNode {
    const leftSize: number = this.left ? this.left.size : 0;

    if (i < leftSize) {
      return this.left.getIthNode(i);
    } else if (i === leftSize) {
      return this;
    }

    return this.right.getIthNode(i - (leftSize + 1));
  }

  public find(data: number): TreeNode | undefined {
    if (data === this.data) {
      return this;
    } else if (data < this.data) {
      return this.left ? this.left.find(data) : undefined;
    }

    return this.right ? this.right.find(data) : undefined;
  }
}

function randomNode(array: number[]): number {
  const [head, ...rest] = array;
  const root: TreeNode = new TreeNode(head);

  rest.forEach((n: number) => root.insertInOrder(n));

  return root.getRandomNode().data;
}

export { randomNode };
