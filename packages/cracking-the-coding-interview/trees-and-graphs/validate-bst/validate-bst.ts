/**
 * ValidateBst
 */
import { BinaryTree } from '../binary-tree';

let lastValue: number;

function checkBST(node: BinaryTree | undefined): boolean {
  if (node === undefined) {
    return true;
  }

  if (!checkBST(node.left)) {
    return false;
  }

  if (lastValue !== undefined && lastValue >= node.value) {
    return false;
  }
  lastValue = node.value;

  return checkBST(node.right);
}

function validateBst(root: BinaryTree): boolean {
  return checkBST(root);
}

export { validateBst };
