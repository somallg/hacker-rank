/**
 */

function findLowestCostNode(costs: object, processed: object): string {
  let ret: string = '';
  Object.keys(costs).forEach((key: string) => {
    const cost: object = ret ? costs[ret] : Infinity;
    if (costs[key] < cost && processed[key] === undefined) {
      ret = key;
    }
  });

  return ret;
}

function rebuildPath(obj: object, key: string): string[] {
  if (obj[key] === undefined) {
    return ['start'];
  }

  return [...rebuildPath(obj, obj[key]), key];
}

function solveDijkstraAlgorithm(
  graph: object,
  costs: object,
  parent: object
): string {
  const processed: object = {};
  let node: string = findLowestCostNode(costs, processed);

  while (node !== 'fin') {
    const cost: object = costs[node];
    const neighbors: object = graph[node];

    Object.keys(neighbors).forEach((n: string) => {
      const newCost: number = cost + neighbors[n];
      if (newCost < costs[n]) {
        costs[n] = newCost;
        parent[n] = node;
      }
      processed[node] = true;
    });

    node = findLowestCostNode(costs, processed);
  }

  return rebuildPath(parent, 'fin').join('-');
}

export { solveDijkstraAlgorithm };
