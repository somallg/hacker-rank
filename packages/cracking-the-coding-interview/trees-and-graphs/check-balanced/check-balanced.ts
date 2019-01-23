/**
 * CheckBalanced
 */
import { BinaryTree } from '../binary-tree';

function checkHeight(node: BinaryTree | undefined): number {
  if (node === undefined) {
    return 0;
  }

  const leftHeight: number = checkHeight(node.left);
  if (isNaN(leftHeight)) {
    return NaN;
  }

  const rightHeight: number = checkHeight(node.right);
  if (isNaN(rightHeight)) {
    return NaN;
  }

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return NaN;
  }

  return Math.max(leftHeight, rightHeight) + 1;
}

function checkBalanced(root: BinaryTree | undefined): boolean {
  return !isNaN(checkHeight(root));
}

export { checkBalanced };
