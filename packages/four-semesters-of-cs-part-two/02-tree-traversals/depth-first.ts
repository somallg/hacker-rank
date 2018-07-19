import { Node } from './node';

function preorderTraverse(node: Node | null, array: number[]): number[] {
  if (!node) {
    return array;
  }

  array.push(node.value);

  /* tslint:disable:no-parameter-reassignment */
  array = preorderTraverse(node.left, array);
  array = preorderTraverse(node.right, array);

  return array;
}

function inorderTraverse(node: Node | null, array: number[]): number[] {
  if (!node) {
    return array;
  }

  /* tslint:disable:no-parameter-reassignment */
  array = inorderTraverse(node.left, array);
  array.push(node.value);
  array = inorderTraverse(node.right, array);

  return array;
}

function postorderTraverse(node: Node | null, array: number[]): number[] {
  if (!node) {
    return array;
  }

  /* tslint:disable:no-parameter-reassignment */
  array = postorderTraverse(node.left, array);
  array = postorderTraverse(node.right, array);
  array.push(node.value);

  return array;
}

export { preorderTraverse, inorderTraverse, postorderTraverse };
