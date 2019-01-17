/**
 * ListOfDepths
 */

import { BinaryTree } from '../binary-tree';

function listOfDepths(root: BinaryTree): number[][] {
  const res: number[][] = [];

  function traverseTree(node: BinaryTree | undefined, depth: number): void {
    if (node === undefined) {
      return;
    }

    if (res[depth] === undefined) {
      res[depth] = [];
    }

    res[depth].push(node.value);

    traverseTree(node.left, depth + 1);
    traverseTree(node.right, depth + 1);
  }

  traverseTree(root, 0);

  return res;
}

function listOfDepthsDFS(root: BinaryTree): number[][] {
  const res: BinaryTree[][] = [];

  let current: BinaryTree[] = [];
  current.push(root);

  while (current.length > 0) {
    res.push(current);
    const parents: BinaryTree[] = current;
    current = [];

    parents.forEach((parent: BinaryTree) => {
      if (parent.left) {
        current.push(parent.left);
      }

      if (parent.right) {
        current.push(parent.right);
      }
    });
  }

  return res.map((nodeArray: BinaryTree[]) =>
    nodeArray.map((node: BinaryTree) => node.value)
  );
}

export { listOfDepths, listOfDepthsDFS };
