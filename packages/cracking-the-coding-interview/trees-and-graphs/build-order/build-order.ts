/**
 * BuildOrder
 */

class Graph {
  public nodes: Project[];
  public map: Map<string, Project>;

  constructor() {
    this.nodes = [];
    this.map = new Map<string, Project>();
  }

  public getOrCreate(name: string): Project {
    if (!this.map.has(name)) {
      const node: Project = new Project(name);
      this.nodes.push(node);
      this.map.set(name, node);
    }

    return <Project>this.map.get(name);
  }

  public addEdge(startName: string, endName: string): void {
    const start: Project = this.getOrCreate(startName);
    const end: Project = this.getOrCreate(endName);

    start.addChild(end);
  }
}

class Project {
  public children: Project[];
  public map: Map<string, Project>;
  public name: string;
  public dependencies: number;

  constructor(name: string) {
    this.children = [];
    this.map = new Map<string, Project>();
    this.name = name;
    this.dependencies = 0;
  }

  public addChild(node: Project): void {
    if (!this.map.has(node.name)) {
      this.children.push(node);
      this.map.set(node.name, node);
      node.incrementDependencies();
    }
  }

  public incrementDependencies(): void {
    this.dependencies += 1;
  }

  public decrementDependencies(): void {
    this.dependencies -= 1;
  }
}

function buildGraph(projects: string[], dependencies: string[][]): Graph {
  const graph: Graph = new Graph();

  projects.forEach((name: string) => graph.getOrCreate(name));

  dependencies.forEach(([startName, endName]: string[]) =>
    graph.addEdge(startName, endName)
  );

  return graph;
}

function addNonDependent(
  order: Project[],
  projects: Project[],
  offset: number
): number {
  projects.forEach((project: Project) => {
    if (project.dependencies === 0) {
      order[offset] = project;
      // tslint:disable-next-line
      offset += 1;
    }
  });

  return offset;
}

function orderGraph(projects: Project[]): string[] {
  const order: Project[] = Array(projects.length);

  let endOfList: number = addNonDependent(order, projects, 0);

  let toBeProcessed: number = 0;

  while (toBeProcessed < order.length) {
    const current: Project = order[toBeProcessed];

    if (!current) {
      return [];
    }

    current.children.forEach((child: Project) => child.decrementDependencies());
    endOfList = addNonDependent(order, current.children, endOfList);
    toBeProcessed += 1;
  }

  return order.map((project: Project) => project.name);
}

function buildOrder(
  projects: string[],
  dependencies: string[][]
): string[] | undefined {
  const graph: Graph = buildGraph(projects, dependencies);

  return orderGraph(graph.nodes);
}

export { buildOrder };
