/**
 * ValidateBst
 */
import { BinaryTree } from '../binary-tree';

function checkBST(
  node: BinaryTree | undefined,
  min: number,
  max: number
): boolean {
  if (node === undefined) {
    return true;
  }

  if (node.value > max || node.value < min) {
    return false;
  }

  return (
    checkBST(node.left, min, node.value) &&
    checkBST(node.right, node.value, max)
  );
}

function validateBst(root: BinaryTree): boolean {
  return checkBST(root, -Infinity, Infinity);
}

export { validateBst };
