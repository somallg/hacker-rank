interface BinaryTree {
  value: number;
  left: BinaryTree | undefined;
  right: BinaryTree | undefined;
  parent: BinaryTree | undefined;
}

export { BinaryTree };
