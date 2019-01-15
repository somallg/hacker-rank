enum State {
  Unvisited,
  Visiting,
  Visited
}

// represent an adjacent list
class Graph {
  public nodes: Node[];

  constructor(nums: number[][]) {
    this.nodes = [];

    nums.forEach((_: number[], index: number) => {
      this.nodes.push(new Node(index));
    });

    nums.forEach((nodeIndexes: number[], index: number) => {
      nodeIndexes.forEach((n: number) => {
        this.nodes[index].children.push(this.nodes[n]);
      });
    });
  }

  public getNodes(): Node[] {
    return this.nodes;
  }
}

// tslint:disable-next-line
class Node {
  // represent a node in adjacent graph
  public data: number;
  public state: State;
  public children: Node[];

  constructor(data: number) {
    this.data = data;
    this.state = State.Unvisited;
    this.children = [];
  }

  public getAdjacent(): Node[] {
    return this.children;
  }
}

export { Graph, Node, State };
