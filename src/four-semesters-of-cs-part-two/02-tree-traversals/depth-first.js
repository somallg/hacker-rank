function preorderTraverse(node, array) {
  if (!node) {
    return array;
  }

  array.push(node.value);
  array = preorderTraverse(node.left, array);
  array = preorderTraverse(node.right, array);

  return array;
}

function inorderTraverse(node, array) {
  if (!node) {
    return array;
  }

  array = inorderTraverse(node.left, array);
  array.push(node.value);
  array = inorderTraverse(node.right, array);

  return array;
}

function postorderTraverse(node, array) {
  if (!node) {
    return array;
  }

  array = postorderTraverse(node.left, array);
  array = postorderTraverse(node.right, array);
  array.push(node.value);

  return array;
}

module.exports = {
  preorderTraverse,
  inorderTraverse,
  postorderTraverse
};
