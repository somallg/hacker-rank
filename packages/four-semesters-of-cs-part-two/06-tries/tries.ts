class Node {
  public value: string;
  public children: Node[];
  public terminus: boolean;

  constructor(value = '') {
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
  const value = s[0];
  const next = s.substr(1);

  let foundChild = node.children.filter(child => child.value === value)[0];

  if (foundChild) {
    foundChild = add(foundChild, next);
  } else {
    foundChild = add(new Node(value), next);
    node.children.push(foundChild);
  }

  return node;
}

function createTrie(words: string[]): Node {
  const root = new Node();
  words.forEach(word => add(root, word.toLowerCase()));

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

  node.children.forEach(child =>
    traverse(child, s.substr(1), `${built}${node.value}`, res)
  );

  return res;
}

function completeTrie(root: Node, s: string): string[] {
  return root.children
    .map(child => traverse(child, s, '', []))
    .reduce((acc, item) => acc.concat(item), []);
}

export { createTrie, completeTrie };
