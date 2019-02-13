/**
 * CheckSubtree
 */

import { BinaryTree } from '../binary-tree';

function checkSubtree(t1: BinaryTree | undefined, t2: BinaryTree): boolean {
  if (t1 === undefined) {
    return false;
  }

  if (t1.value === t2.value && matchTree(t1, t2)) {
    return true;
  }

  return checkSubtree(t1.left, t2) || checkSubtree(t1.right, t2);
}

function matchTree(
  t1: BinaryTree | undefined,
  t2: BinaryTree | undefined
): boolean {
  if (t1 === undefined && t2 === undefined) {
    return true;
  }

  if (t1 === undefined || t2 === undefined) {
    return false;
  }

  if (t1.value !== t2.value) {
    return false;
  }

  return matchTree(t1.left, t2.left) && matchTree(t1.right, t2.right);
}

export { checkSubtree };
