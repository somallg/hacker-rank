/**
 * Test specs for first-common-ancestor problem
 * FirstCommonAncestor
 */

import { BinaryTree } from '../binary-tree';
import { firstCommonAncestor } from './first-common-ancestor';

describe('CrackingTheCodingInterview - FirstCommonAncestor', () => {
  describe('firstCommonAncestor', () => {
    const binaryTree: BinaryTree = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: undefined,
          right: undefined,
          parent: undefined
        },
        right: {
          value: 5,
          left: undefined,
          right: undefined,
          parent: undefined
        },
        parent: undefined
      },
      right: {
        value: 3,
        left: {
          value: 6,
          left: undefined,
          right: undefined,
          parent: undefined
        },
        right: {
          value: 7,
          left: undefined,
          right: undefined,
          parent: undefined
        },
        parent: undefined
      },
      parent: undefined
    };

    bindParent(binaryTree);

    const g: BinaryTree = <BinaryTree>(binaryTree.left && binaryTree.left.left);
    const h: BinaryTree = <BinaryTree>(
      (binaryTree.left && binaryTree.left.right)
    );
    const s: BinaryTree = <BinaryTree>(
      (binaryTree.right && binaryTree.right.left)
    );

    const rootTwo: BinaryTree = <BinaryTree>binaryTree.left;

    it('should work for node 4 and 5', () => {
      expect(firstCommonAncestor(binaryTree, g, h)).toEqual(2);
    });

    it('should work for node 4 and 6', () => {
      expect(firstCommonAncestor(binaryTree, g, s)).toEqual(1);
    });

    it('should work for node 2 and 4', () => {
      expect(firstCommonAncestor(binaryTree, g, rootTwo)).toEqual(2);
    });
  });
});

function bindParent(tree: BinaryTree): void {
  const parent: BinaryTree = tree;

  if (tree.left) {
    tree.left.parent = parent;
    bindParent(tree.left);
  }

  if (tree.right) {
    tree.right.parent = parent;
    bindParent(tree.right);
  }
}
