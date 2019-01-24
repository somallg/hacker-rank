/**
 * Successor
 */
import { BinaryTree } from '../binary-tree';

function leftMostNode(node: BinaryTree): BinaryTree | undefined {
  if (node === undefined) {
    return undefined;
  }

  while (node.left) {
    // tslint:disable-next-line
    node = node.left;
  }

  return node;
}

function rightMostParent(node: BinaryTree): BinaryTree | undefined {
  // go up until we're on the left instead of right
  let current: BinaryTree = node;
  let parent: BinaryTree | undefined = current.parent;

  while (parent !== undefined && parent.right === current) {
    current = parent;
    parent = current.parent;
  }

  return parent;
}

function successor(n: BinaryTree | undefined): BinaryTree | undefined {
  if (n === undefined) {
    return undefined;
  }

  if (n.right) {
    return leftMostNode(n.right);
  }

  return rightMostParent(n);
}

export { successor };
