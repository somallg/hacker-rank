/**
 * MinimalTree
 */
import { BinaryTree } from '../binary-tree';

function createBinaryTree(
  array: number[],
  fromIndex: number = 0,
  toIndex: number = array.length - 1
): BinaryTree | undefined {
  if (fromIndex > toIndex) {
    return undefined;
  }

  const middle: number = (toIndex + fromIndex) >>> 1;

  return {
    value: array[middle],
    left: createBinaryTree(array, fromIndex, middle - 1),
    right: createBinaryTree(array, middle + 1, toIndex)
  };
}

function minimalTree(array: number[]): BinaryTree | undefined {
  return createBinaryTree(array);
}

export { BinaryTree, minimalTree };
