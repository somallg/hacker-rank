const NO_ONE = 0;
const BY_A = 1;
const BY_B = 2;

interface VisitedNode {
  closed: boolean;
  length: number;
  openedBy: number;
  x: number;
  y: number;
}

function getNeighbors(
  visited: VisitedNode[][],
  x: number,
  y: number
): VisitedNode[] {
  const neighbors = [];

  if (y - 1 >= 0 && !visited[y - 1][x].closed) {
    // left
    neighbors.push(visited[y - 1][x]);
  }

  if (y + 1 < visited.length && !visited[y + 1][x].closed) {
    // right
    neighbors.push(visited[y + 1][x]);
  }

  if (x + 1 < visited[0].length && !visited[y][x + 1].closed) {
    // down
    neighbors.push(visited[y][x + 1]);
  }

  if (x - 1 >= 0 && !visited[y][x - 1].closed) {
    // up
    neighbors.push(visited[y][x - 1]);
  }

  return neighbors;
}

function findShortestPathLength(
  maze: number[][],
  [xA, yA]: [number, number],
  [xB, yB]: [number, number]
): number {
  const visited = maze.map((row, y) =>
    row.map(
      (point, x) =>
        ({
          x,
          y,
          closed: point === 1,
          length: 0,
          openedBy: NO_ONE
        } as VisitedNode)
    )
  );

  visited[yA][xA].openedBy = BY_A;
  visited[yB][xB].openedBy = BY_B;

  let aQueue = [visited[yA][xA]];
  let bQueue = [visited[yB][xB]];
  let iteration = 0;

  while (aQueue.length && bQueue.length) {
    iteration += 1;
    const aNeighbors = aQueue.reduce(
      (acc, neighbor) =>
        acc.concat(getNeighbors(visited, neighbor.x, neighbor.y)),
      [] as VisitedNode[]
    );

    aQueue = [];
    // tslint:disable-next-line
    for (let i = 0; i < aNeighbors.length; i += 1) {
      const neighbor = aNeighbors[i];
      if (neighbor.openedBy === BY_B) {
        return neighbor.length + iteration;
        // tslint:disable-next-line
      } else if (neighbor.openedBy === NO_ONE) {
        neighbor.length = iteration;
        neighbor.openedBy = BY_A;
        aQueue.push(neighbor);
      }
    }

    const bNeighbors = bQueue.reduce(
      (acc, neighbor) =>
        acc.concat(getNeighbors(visited, neighbor.x, neighbor.y)),
      [] as VisitedNode[]
    );

    bQueue = [];
    // tslint:disable-next-line
    for (let i = 0; i < bNeighbors.length; i += 1) {
      const neighbor = bNeighbors[i];
      if (neighbor.openedBy === BY_A) {
        return neighbor.length + iteration;
        // tslint:disable-next-line
      } else if (neighbor.openedBy === NO_ONE) {
        neighbor.length = iteration;
        neighbor.openedBy = BY_B;
        bQueue.push(neighbor);
      }
    }
  }

  return -1;
}

export { findShortestPathLength };