import { Node } from './node';

function breadthFirstTraverse(queue: Node[], array: number[]) {
  if (queue.length === 0) {
    return array;
  }

  const [first] = queue;
  let [, ...rest] = queue;
  array.push(first.value);

  if (first.left) {
    rest = [...rest, first.left];
  }

  if (first.right) {
    rest = [...rest, first.right];
  }

  /* tslint:disable:no-parameter-reassignment */
  array = breadthFirstTraverse(rest, array);

  return array;
}

export { breadthFirstTraverse };
