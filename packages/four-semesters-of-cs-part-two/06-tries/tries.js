function Node(value = '', children = []) {
  this.value = value;
  this.children = children;
  this.terminus = false;
}

function add(node, string) {
  if (string.length === 0) {
    node.terminus = true;
    return node;
  }
  var value = string[0];
  var next = string.substr(1);

  var child = node.children.filter(child => child.value === value)[0];

  if (child) {
    child = add(child, next);
  } else {
    child = add(new Node(value), next);
    node.children.push(child);
  }

  return node;
}

function createTrie(words) {
  var root = new Node();
  words.forEach(word => add(root, word.toLowerCase()));

  return root;
}

function traverse(node, string, built, res) {
  if (res.length >= 3 || (string !== '' && string[0] !== node.value)) {
    return res;
  }

  if (node.terminus) {
    res.push(`${built}${node.value}`);
  }

  node.children.forEach(child =>
    traverse(child, string.substr(1), `${built}${node.value}`, res)
  );

  return res;
}

function completeTrie(root, string) {
  return root.children
    .map(child => traverse(child, string, '', []))
    .reduce((acc, item) => acc.concat(item), []);
}

export { createTrie, completeTrie };
