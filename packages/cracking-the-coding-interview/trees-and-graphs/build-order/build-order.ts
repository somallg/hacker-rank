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
  public name: string;
  public dependencies: number;
  public children: Project[];
  public map: Map<string, Project>;

  constructor(name: string) {
    this.name = name;
    this.dependencies = 0;
    this.children = [];
    this.map = new Map<string, Project>();
  }

  public addChild(child: Project): void {
    if (!this.map.has(child.name)) {
      this.children.push(child);
      this.map.set(child.name, child);
      child.incrementDependencies();
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
  projects: Project[],
  order: Project[],
  offset: number
): number {
  for (const project of projects) {
    if (project.dependencies === 0) {
      order[offset] = project;
      // tslint:disable-next-line
      offset += 1;
    }
  }

  return offset;
}

function orderGraph(graph: Graph): string[] {
  const order: Project[] = Array(graph.nodes.length);

  let endIndex: number = addNonDependent(graph.nodes, order, 0);
  let toBeProcessed: number = 0;

  while (toBeProcessed < order.length) {
    const current: Project = order[toBeProcessed];

    if (current === undefined) {
      return [];
    }

    current.children.forEach((child: Project) => child.decrementDependencies());
    endIndex = addNonDependent(current.children, order, endIndex);

    toBeProcessed += 1;
  }

  return order.map((project: Project) => project.name);
}

function buildOrder(projects: string[], dependencies: string[][]): string[] {
  const graph: Graph = buildGraph(projects, dependencies);

  return orderGraph(graph);
}

export { buildOrder };
