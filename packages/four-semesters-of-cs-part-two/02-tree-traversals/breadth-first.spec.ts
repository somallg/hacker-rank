import { Node } from './node';

import { breadthFirstTraverse } from './breadth-first';

describe('breadthFirstTraverse', () => {
  const answer: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K'
  ];

  const tree: Node<string> = {
    value: 'A',
    left: {
      value: 'B',
      left: {
        value: 'D',
        left: {
          value: 'G',
          left: undefined,
          right: undefined
        },
        right: undefined
      },
      right: {
        value: 'E',
        left: undefined,
        right: {
          value: 'H',
          left: {
            value: 'K',
            left: undefined,
            right: undefined
          },
          right: undefined
        }
      }
    },
    right: {
      value: 'C',
      left: {
        value: 'F',
        left: {
          value: 'I',
          left: undefined,
          right: undefined
        },
        right: {
          value: 'J',
          left: undefined,
          right: undefined
        }
      },
      right: undefined
    }
  };

  it('should work', () => {
    expect(breadthFirstTraverse([tree], [])).toEqual(answer);
  });
});
