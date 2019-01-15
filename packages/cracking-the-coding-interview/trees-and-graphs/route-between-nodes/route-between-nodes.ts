/**
 * RouteBetweenNodes
 */

import { Graph, Node, State } from '../graph';

function routeBetweenNodes(
  nums: number[][],
  startIndex: number,
  endIndex: number
): boolean {
  const graph: Graph = new Graph(nums);
  const nodes: Node[] = graph.getNodes();

  return search(graph, nodes[startIndex], nodes[endIndex]);
}

function search(graph: Graph, start: Node, end: Node): boolean {
  if (start === end) {
    return true;
  }

  const queue: Node[] = [];
  start.state = State.Visiting;
  queue.push(start);

  while (queue.length > 0) {
    const u: Node | undefined = queue.shift();

    if (u) {
      for (const v of u.getAdjacent()) {
        if (v.state === State.Visited) {
          continue;
        }

        // v is not visited or visiting
        if (v === end) {
          return true;
        }

        v.state = State.Visiting;
        queue.push(v);
      }

      u.state = State.Visited;
    }
  }

  return false;
}

export { routeBetweenNodes };
