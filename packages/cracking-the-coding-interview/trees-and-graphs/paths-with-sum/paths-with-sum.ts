/**
 * PathsWithSum
 */

import { BinaryTree } from '../binary-tree';

function pathsWithSum(root: BinaryTree | undefined, targetSum: number): number {
  return countPathsWithSum(root, 0, targetSum, new Map<number, number>());
}

function countPathsWithSum(
  node: BinaryTree | undefined,
  currentSum: number,
  targetSum: number,
  pathCount: Map<number, number>
): number {
  if (node === undefined) {
    return 0;
  }

  // tslint:disable-next-line
  currentSum += node.value;
  const sum: number = currentSum - targetSum;
  let totalPaths: number = pathCount.get(sum) || 0;

  if (currentSum === targetSum) {
    totalPaths += 1;
  }

  incrementMap(pathCount, currentSum, 1);
  totalPaths += countPathsWithSum(node.left, currentSum, targetSum, pathCount);
  totalPaths += countPathsWithSum(node.right, currentSum, targetSum, pathCount);
  incrementMap(pathCount, currentSum, -1);

  return totalPaths;
}

function incrementMap(
  map: Map<number, number>,
  key: number,
  delta: number
): void {
  const newValue: number = (map.get(key) || 0) + delta;
  map.set(key, newValue);
}

export { pathsWithSum };
