class Tree {
  public root: Node | null;

  constructor() {
    this.root = null;
  }

  public add(value: any): void {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.root.add(value);
    }
  }

  public toJSON(): string {
    return JSON.stringify(this.root ? this.root.serialize() : '', null, 4);
  }

  public toObject(): Node {
    return this.root ? this.root.serialize() : new Node();
  }
}

// tslint:disable-next-line
class Node {
  public right: Node | null;
  public left: Node | null;
  public value: any;
  public height: number;

  constructor(value = null, left = null, right = null) {
    this.left = left;
    this.right = right;
    this.value = value;
    this.height = 1;
  }

  public add(value: any): void {
    if (value < this.value) {
      // go left
      if (this.left) {
        this.left.add(value);
      } else {
        this.left = new Node(value);
      }
      if (!this.right || this.right.height < this.left.height) {
        this.height = this.left.height + 1;
      }
    } else {
      // go right
      if (this.right) {
        this.right.add(value);
      } else {
        this.right = new Node(value);
      }
      if (!this.left || this.right.height > this.left.height) {
        this.height = this.right.height + 1;
      }
    }
    this.balance();
  }

  public balance(): void {
    const rightHeight = this.right ? this.right.height : 0;
    const leftHeight = this.left ? this.left.height : 0;

    // tslint:disable-next-line
    console.log(this.value, leftHeight, rightHeight);

    if (leftHeight > rightHeight + 1) {
      const leftRightHeight =
        this.left && this.left.right ? this.left.right.height : 0;
      const leftLeftHeight =
        this.left && this.left.left ? this.left.left.height : 0;

      if (leftRightHeight > leftLeftHeight && this.left) {
        this.left.rotateRR();
      }

      this.rotateLL();
    } else if (rightHeight > leftHeight + 1) {
      const rightRightHeight =
        this.right && this.right.right ? this.right.right.height : 0;
      const rightLeftHeight =
        this.right && this.right.left ? this.right.left.height : 0;

      if (rightLeftHeight > rightRightHeight && this.right) {
        this.right.rotateLL();
      }

      this.rotateRR();
    }
  }

  public rotateRR(): void {
    const valueBefore = this.value;
    const leftBefore = this.left;

    if (this.right) {
      this.value = this.right.value;
      this.left = this.right;
      this.right = this.right.right;
    }

    if (this.left) {
      this.left.right = this.left.left;
      this.left.left = leftBefore;
      this.left.value = valueBefore;
      this.left.updateInNewLocation();
    }

    this.updateInNewLocation();
  }

  public rotateLL(): void {
    const valueBefore = this.value;
    const rightBefore = this.right;

    if (this.left) {
      this.value = this.left.value;
      this.right = this.left;
      this.left = this.left.left;
    }

    if (this.right) {
      this.right.left = this.right.right;
      this.right.right = rightBefore;
      this.right.value = valueBefore;
      this.right.updateInNewLocation();
    }

    this.updateInNewLocation();
  }

  public updateInNewLocation(): void {
    if (!this.right && !this.left) {
      this.height = 1;
    } else if (
      !this.right ||
      (this.left && this.right.height < this.left.height)
    ) {
      this.height = this.left ? this.left.height + 1 : 1;
    } else {
      // if (!this.left || this.right.height > this.left.height)
      this.height = this.right.height + 1;
    }
  }

  public serialize(): Node {
    const ans = new Node(this.value);
    ans.left = this.left === null ? null : this.left.serialize();
    ans.right = this.right === null ? null : this.right.serialize();
    ans.height = this.height;
    return ans;
  }
}

export { Tree };
