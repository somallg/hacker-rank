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

function getSibling(node: BinaryTree): BinaryTree | undefined {
  if (node === undefined || node.parent === undefined) {
    return undefined;
  }

  return node.parent.left === node ? node.parent.right : node.parent.left;
}

function firstCommonAncestor(
  root: BinaryTree,
  g: BinaryTree,
  h: BinaryTree
): number {
  if (!cover(root, g) || !cover(root, h)) {
    return -1;
  }

  if (cover(g, h)) {
    return g.value;
  }

  if (cover(h, g)) {
    return h.value;
  }

  let sibling: BinaryTree | undefined = getSibling(g);
  let parent: BinaryTree | undefined = g.parent;

  while (parent && !cover(sibling, h)) {
    // tslint:disable-next-line
    sibling = getSibling(parent);
    parent = parent.parent;
  }

  return parent ? parent.value : root.value;
}

export { firstCommonAncestor };
