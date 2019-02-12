/**
 * CheckSubtree
 */

import { BinaryTree } from '../binary-tree';

function checkSubtree(t1: BinaryTree, t2: BinaryTree): boolean {
  const s1: string = traverse(t1, []).join('');
  const s2: string = traverse(t2, []).join('');

  return s1.endsWith(s2);
}

function traverse(node: BinaryTree | undefined, result: number[]): number[] {
  if (node === undefined) {
    result.push(NaN);

    return result;
  }

  result.push(node.value);

  traverse(node.left, result);
  traverse(node.right, result);

  return result;
}

export { checkSubtree };
