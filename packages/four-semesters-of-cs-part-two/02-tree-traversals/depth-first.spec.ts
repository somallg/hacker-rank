import { Node } from './node';

import {
  inorderTraverse,
  postorderTraverse,
  preorderTraverse
} from './depth-first';

describe('Depth First tests', () => {
  const tree: Node<number> = {
    value: 8,
    left: {
      value: 4,
      left: {
        value: 3,
        left: {
          value: 2,
          left: undefined,
          right: undefined
        },
        right: undefined
      },
      right: {
        value: 5,
        left: undefined,
        right: {
          value: 7,
          left: {
            value: 6,
            left: undefined,
            right: undefined
          },
          right: undefined
        }
      }
    },
    right: {
      value: 12,
      left: {
        value: 10,
        left: {
          value: 9,
          left: undefined,
          right: undefined
        },
        right: {
          value: 11,
          left: undefined,
          right: undefined
        }
      },
      right: undefined
    }
  };

  it('preorderTraverse', () => {
    expect(preorderTraverse(tree, [])).toEqual([
      8,
      4,
      3,
      2,
      5,
      7,
      6,
      12,
      10,
      9,
      11
    ]);
  });

  it('inorderTraverse', () => {
    expect(inorderTraverse(tree, [])).toEqual([
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ]);
  });

  it('postorderTraverse', () => {
    expect(postorderTraverse(tree, [])).toEqual([
      2,
      3,
      6,
      7,
      5,
      4,
      9,
      11,
      10,
      12,
      8
    ]);
  });
});
