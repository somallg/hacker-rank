/**
 * BuildOrder
 */

enum State {
  COMPLETED,
  PARTIAL,
  BLANK
}

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
  public status: State;
  public children: Project[];
  public map: Map<string, Project>;

  constructor(name: string) {
    this.name = name;
    this.dependencies = 0;
    this.status = State.BLANK;
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
}

function buildGraph(projects: string[], dependencies: string[][]): Graph {
  const graph: Graph = new Graph();

  projects.forEach((name: string) => graph.getOrCreate(name));

  dependencies.forEach(([startName, endName]: string[]) =>
    graph.addEdge(startName, endName)
  );

  return graph;
}

function doDFS(project: Project, stack: string[]): boolean {
  if (project.status === State.PARTIAL) {
    return false;
  }

  if (project.status === State.BLANK) {
    project.status = State.PARTIAL;

    for (const child of project.children) {
      if (!doDFS(child, stack)) {
        return false;
      }
    }

    stack.push(project.name);
    project.status = State.COMPLETED;
  }

  return true;
}

function orderGraph(projects: Project[]): string[] {
  const result: string[] = [];

  for (const project of projects) {
    if (project.status === State.BLANK) {
      if (!doDFS(project, result)) {
        return [];
      }
    }
  }

  return result.reverse();
}

function buildOrder(projects: string[], dependencies: string[][]): string[] {
  const graph: Graph = buildGraph(projects, dependencies);

  return orderGraph(graph.nodes);
}

export { buildOrder };
