import { generateMaze } from './generate-maze';
import { genEmptyMaze, Node, setOrder } from './maze.util';

// Refer: https://codepen.io/somallg/pen/vjBGyq?editors=0010
// tslint:disable:max-func-body-length
xdescribe('mazes', () => {
  it('5x5', () => {
    setOrder(1);
    const maze: Node[][] = generateMaze(genEmptyMaze(5, 5), [0, 0]);
    expect(maze).toEqual([
      [
        { n: true, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: false, visited: true }
      ],
      [
        { n: false, e: true, s: true, w: true, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true }
      ],
      [
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: false, visited: true }
      ],
      [
        { n: false, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true }
      ],
      [
        { n: true, e: true, s: false, w: true, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: false, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: true, w: false, visited: true }
      ]
    ]);
  });

  it('8x8', () => {
    setOrder(2);
    const maze: Node[][] = generateMaze(genEmptyMaze(8, 8), [5, 3]);
    expect(maze).toEqual([
      [
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: false, visited: true }
      ],
      [
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true }
      ],
      [
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true }
      ],
      [
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: true, s: false, w: true, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: true, visited: true },
        { n: false, e: false, s: false, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true }
      ],
      [
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: true, visited: true }
      ],
      [
        { n: true, e: false, s: true, w: true, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: true, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: false, w: false, visited: true }
      ],
      [
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: false, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true }
      ],
      [
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true }
      ]
    ]);
  });

  xit('15x15', () => {
    setOrder(3);
    const maze: Node[][] = generateMaze(genEmptyMaze(15, 15), [10, 2]);
    expect(maze).toEqual([
      [
        { n: false, e: true, s: true, w: true, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: true, w: false, visited: true }
      ],
      [
        { n: false, e: false, s: false, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: false, visited: true }
      ],
      [
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: true, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true }
      ],
      [
        { n: false, e: true, s: true, w: true, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: false, e: true, s: false, w: true, visited: true }
      ],
      [
        { n: false, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: false, visited: true },
        { n: true, e: true, s: false, w: true, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: true, s: true, w: true, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: false, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true }
      ],
      [
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: false, visited: true }
      ],
      [
        { n: false, e: true, s: false, w: true, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true }
      ],
      [
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: false, w: false, visited: true },
        { n: true, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: false, e: true, s: false, w: true, visited: true }
      ],
      [
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: false, e: true, s: false, w: true, visited: true }
      ],
      [
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: true, s: false, w: true, visited: true }
      ],
      [
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: false, visited: true }
      ],
      [
        { n: false, e: true, s: false, w: true, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: true, s: false, w: true, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: false, w: false, visited: true }
      ],
      [
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: false, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: true, w: false, visited: true },
        { n: false, e: true, s: false, w: true, visited: true },
        { n: true, e: true, s: false, w: true, visited: true }
      ],
      [
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: true, s: false, w: true, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: false, e: false, s: true, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: false, e: true, s: true, w: false, visited: true }
      ],
      [
        { n: true, e: true, s: false, w: true, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: false, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: true, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: false, s: false, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true },
        { n: true, e: false, s: false, w: true, visited: true },
        { n: true, e: false, s: true, w: false, visited: true },
        { n: true, e: true, s: false, w: false, visited: true }
      ]
    ]);
  });
});
