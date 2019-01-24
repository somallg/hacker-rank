/**
 * Test specs for successor problem
 * Successor
 */

import { BinaryTree } from '../binary-tree';
import { successor } from './successor';

describe('CrackingTheCodingInterview - Successor', () => {
  describe('successor', () => {
    const input: BinaryTree = {
      value: 1,
      right: {
        value: 2,
        left: undefined,
        right: undefined,
        parent: undefined
      },
      left: {
        value: 3,
        left: undefined,
        right: undefined,
        parent: undefined
      },
      parent: undefined
    };

    if (input.right) {
      input.right.parent = input;
    }

    if (input.left) {
      input.left.parent = input;
    }

    it('should work on left node', () => {
      const output: BinaryTree | undefined = successor(input.left);

      expect(output && output.value).toEqual(1);
    });

    it('should work on right node', () => {
      const output: BinaryTree | undefined = successor(input.right);

      expect(output).toBeUndefined();
    });
  });
});
