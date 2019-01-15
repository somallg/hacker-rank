import { Node } from './node';

function breadthFirstTraverse<T>(queue: Node<T>[], array: T[]): T[] {
  if (queue.length === 0) {
    return array;
  }

  const [first]: Node<T>[] = queue;
  let [, ...rest]: Node<T>[] = queue;
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
