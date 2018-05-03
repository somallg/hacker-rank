/**
 */

function findLowestCostNode(costs: object, processed: object): string {
  let ret = '';
  Object.keys(costs).forEach(key => {
    let cost = ret ? costs[ret] : Infinity;
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

function solveDijkstraAlgorithm(graph: object, costs: object, parent: object) {
  const processed = {};
  let node = findLowestCostNode(costs, processed);

  while (node !== 'fin') {
    let cost = costs[node];
    let neighbors = graph[node];

    Object.keys(neighbors).forEach(n => {
      let newCost = cost + neighbors[n];
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
