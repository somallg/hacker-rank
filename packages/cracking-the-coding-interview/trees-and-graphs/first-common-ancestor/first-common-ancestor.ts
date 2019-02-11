/**
 * FirstCommonAncestor
 */
import { BinaryTree } from '../binary-tree';

class Result {
  public node: BinaryTree | undefined;
  public isAncestor: boolean;

  constructor(node: BinaryTree | undefined, isAncestor: boolean) {
    this.node = node;
    this.isAncestor = isAncestor;
  }
}

function findCommonAncestor(
  root: BinaryTree | undefined,
  g: BinaryTree,
  h: BinaryTree
): Result {
  if (root === undefined) {
    return new Result(undefined, false);
  }

  if (root === g && root === h) {
    return new Result(root, true);
  }

  const rx: Result = findCommonAncestor(root.left, g, h);
  if (rx.isAncestor) {
    return rx;
  }

  const ry: Result = findCommonAncestor(root.right, g, h);
  if (ry.isAncestor) {
    return ry;
  }

  // rx and ry are not ancestor but their node is defined which man root is the commn ancestor
  if (rx.node !== undefined && ry.node !== undefined) {
    return new Result(root, true);
  } else if (root === g || root === h) {
    // we are in g/h branch, so either g/h is is this banch or not
    return new Result(root, rx.node !== undefined || ry.node !== undefined);
  }

  return new Result(rx.node !== undefined ? rx.node : ry.node, false);
}

function firstCommonAncestor(
  root: BinaryTree,
  g: BinaryTree,
  h: BinaryTree
): number {
  const result: Result = findCommonAncestor(root, g, h);

  if (result.isAncestor && result.node) {
    return result.node.value;
  }

  return -1;
}

export { firstCommonAncestor };
