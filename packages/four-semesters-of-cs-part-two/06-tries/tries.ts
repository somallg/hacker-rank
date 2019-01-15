class Node {
  public value: string;
  public children: Node[];
  public terminus: boolean;

  constructor(value: string = '') {
    this.value = value;
    this.children = [];
    this.terminus = false;
  }
}

function add(node: Node, s: string): Node {
  if (s.length === 0) {
    node.terminus = true;

    return node;
  }
  const value: string = s[0];
  const next: string = s.substr(1);

  let foundChild: Node = node.children.filter(
    (child: Node) => child.value === value
  )[0];

  if (foundChild) {
    foundChild = add(foundChild, next);
  } else {
    foundChild = add(new Node(value), next);
    node.children.push(foundChild);
  }

  return node;
}

function createTrie(words: string[]): Node {
  const root: Node = new Node();
  words.forEach((word: string) => add(root, word.toLowerCase()));

  return root;
}

function traverse(
  node: Node,
  s: string,
  built: string,
  res: string[]
): string[] {
  if (res.length >= 3 || (s !== '' && s[0] !== node.value)) {
    return res;
  }

  if (node.terminus) {
    res.push(`${built}${node.value}`);
  }

  node.children.forEach((child: Node) =>
    traverse(child, s.substr(1), `${built}${node.value}`, res)
  );

  return res;
}

function completeTrie(root: Node, s: string): string[] {
  return root.children
    .map((child: Node) => traverse(child, s, '', []))
    .reduce((acc: string[], item: string[]) => acc.concat(item), []);
}

export { createTrie, completeTrie, Node };
