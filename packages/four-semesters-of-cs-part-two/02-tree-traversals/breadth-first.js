function breadthFirstTraverse(queue, array) {
  if (queue.length === 0) {
    return array;
  }

  var [first, ...rest] = queue;
  array.push(first.value);

  if (first.left) {
    rest = [...rest, first.left];
  }

  if (first.right) {
    rest = [...rest, first.right];
  }

  array = breadthFirstTraverse(rest, array);

  return array;
}

module.exports = breadthFirstTraverse;
