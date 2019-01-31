/**
 * FirstCommonAncestor
 */
import { BinaryTree } from '../binary-tree';

function cover(node: BinaryTree | undefined, h: BinaryTree): boolean {
  if (node === undefined) {
    return false;
  }

  if (node === h) {
    return true;
  }

  return cover(node.left, h) || cover(node.right, h);
}

function findCommonAncestor(
  node: BinaryTree | undefined,
  g: BinaryTree,
  h: BinaryTree
): BinaryTree | undefined {
  if (node === undefined || node === g || node === h) {
    return node;
  }

  const gIsOnLeft: boolean = cover(node.left, g);
  const hIsOnLeft: boolean = cover(node.left, h);

  if (gIsOnLeft !== hIsOnLeft) {
    return node;
  }

  const childSide: BinaryTree | undefined = gIsOnLeft ? node.left : node.right;

  return findCommonAncestor(childSide, g, h);
}

function firstCommonAncestor(
  root: BinaryTree,
  g: BinaryTree,
  h: BinaryTree
): number {
  if (!cover(root, g) || !cover(root, h)) {
    return -1;
  }

  const commonAncestor: BinaryTree | undefined = findCommonAncestor(root, g, h);

  return commonAncestor ? commonAncestor.value : root.value;
}

export { firstCommonAncestor };
