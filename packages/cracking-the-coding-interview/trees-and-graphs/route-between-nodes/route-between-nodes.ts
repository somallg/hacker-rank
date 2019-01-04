/**
 * RouteBetweenNodes
 */

import { Graph, Node, State } from '../graph';

function routeBetweenNodes(
  nums: number[][],
  startIndex: number,
  endIndex: number
): boolean {
  const graph = new Graph(nums);
  const nodes = graph.getNodes();

  return search(graph, nodes[startIndex], nodes[endIndex]);
}

function search(graph: Graph, start: Node, end: Node): boolean {
  // use bfs
  // 1. push start vao queue
  // 2. lap den khi queue rong thi thoi
  // 3. voi moi vang lap while lay Node dau tien trong queue goi la u
  // 4. neu nhu Node u khong undefined/null di den 5
  // 5. lay tat ca Node lien ke cua u goi la v
  // 6. neu v.state !== unvisited to next sang v tiep theo
  // 6. neu v === end nghia la da co duong den start => end
  // 7. neu khong add v vao queue va gan v === visiting
  // 8. sau khi duyet het node lien ke cua u gan u.start = Visited
  // 9. den vong lap while tiep theo
  if (start === end) {
    return true;
  }

  const queue: Node[] = [];

  start.state = State.Visiting;
  queue.push(start);

  while (queue.length > 0) {
    const u = queue.shift();

    if (u !== undefined) {
      for (const v of u.getAdjacent()) {
        if (v.state !== State.Unvisited) {
          continue;
        }

        // v is unvisited
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
