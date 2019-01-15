const NO_ONE: number = 0;
const BY_A: number = 1;
const BY_B: number = 2;

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
  const neighbors: VisitedNode[] = [];

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
  const visited: VisitedNode[][] = maze.map((row: number[], y: number) =>
    row.map(
      (point: number, x: number) =>
        // tslint:disable:no-object-literal-type-assertion
        <VisitedNode>{
          closed: point === 1,
          length: 0,
          openedBy: NO_ONE,
          x,
          y
        }
    )
  );

  visited[yA][xA].openedBy = BY_A;
  visited[yB][xB].openedBy = BY_B;

  let aQueue: VisitedNode[] = [visited[yA][xA]];
  let bQueue: VisitedNode[] = [visited[yB][xB]];
  let iteration: number = 0;

  while (aQueue.length && bQueue.length) {
    iteration += 1;
    const aNeighbors: VisitedNode[] = aQueue.reduce(
      (acc: VisitedNode[], neighbor: VisitedNode) =>
        acc.concat(getNeighbors(visited, neighbor.x, neighbor.y)),
      []
    );

    aQueue = [];
    // tslint:disable-next-line
    for (let i: number = 0; i < aNeighbors.length; i += 1) {
      const neighbor: VisitedNode = aNeighbors[i];
      if (neighbor.openedBy === BY_B) {
        return neighbor.length + iteration;
        // tslint:disable-next-line
      } else if (neighbor.openedBy === NO_ONE) {
        neighbor.length = iteration;
        neighbor.openedBy = BY_A;
        aQueue.push(neighbor);
      }
    }

    const bNeighbors: VisitedNode[] = bQueue.reduce(
      (acc: VisitedNode[], neighbor: VisitedNode) =>
        acc.concat(getNeighbors(visited, neighbor.x, neighbor.y)),
      []
    );

    bQueue = [];
    // tslint:disable-next-line
    for (let i: number = 0; i < bNeighbors.length; i += 1) {
      const neighbor: VisitedNode = bNeighbors[i];
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
