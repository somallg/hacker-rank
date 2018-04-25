import { Node, randomizeDirection } from './maze.util';

function getModifier(key: string) {
  return key === 'n'
    ? [0, 1]
    : key === 'e'
      ? [1, 0]
      : key === 's'
        ? [0, -1]
        : [-1, 0];
}

function getOpposite(key: string) {
  return key === 'n' ? 's' : key === 'e' ? 'w' : key === 's' ? 'n' : 'e';
}

function nextNode(x: number, y: number, maze: Node[][]) {
  const current = maze[y][x];
  current.visited = true;

  randomizeDirection()
    .map(direction => ({
      direction,
      mod: getModifier(direction),
      opposite: getOpposite(direction)
    }))
    .filter(nextMove => {
      const [xMod, yMod] = nextMove.mod;
      return maze[y + yMod] && maze[y + yMod][x + xMod];
    })
    .forEach(nextMove => {
      const [xMod, yMod] = nextMove.mod;
      if (!maze[y + yMod][x + xMod].visited) {
        current[nextMove.direction] = false;
        maze[y + yMod][x + xMod][nextMove.opposite] = false;

        nextNode(x + xMod, y + yMod, maze);
      }
    });

  return false;
}

function generateMaze(maze: Node[][], [xStart, yStart]: [number, number]) {
  nextNode(xStart, yStart, maze);

  return maze;
}

export { generateMaze };
