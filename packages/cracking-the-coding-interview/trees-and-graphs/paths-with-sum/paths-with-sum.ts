/**
 * PathsWithSum
 */

import { BinaryTree } from '../binary-tree';

function pathsWithSum(root: BinaryTree | undefined, targetSum: number): number {
  if (root === undefined) {
    return 0;
  }

  const pathFromRoot: number = countPathsFromNode(root, 0, targetSum);

  const pathsOnLeft: number = pathsWithSum(root.left, targetSum);
  const pathsOnRight: number = pathsWithSum(root.right, targetSum);

  return pathFromRoot + pathsOnLeft + pathsOnRight;
}

function countPathsFromNode(
  node: BinaryTree | undefined,
  currentSum: number,
  targetSum: number
): number {
  if (node === undefined) {
    return 0;
  }

  let paths: number = 0;

  if (node.value === targetSum) {
    paths += 1;
  }
  // tslint:disable-next-line
  currentSum += node.value;
  if (currentSum === targetSum) {
    paths += 1;
  }

  paths += countPathsFromNode(node.left, currentSum, targetSum);
  paths += countPathsFromNode(node.right, currentSum, targetSum);

  return paths;
}

export { pathsWithSum };
