/**
 * FirstCommonAncestor
 */
import { BinaryTree } from '../binary-tree';

function height(g: BinaryTree): number {
  let h: number = 0;

  while (g.parent !== undefined) {
    h += 1;
    // tslint:disable-next-line
    g = g.parent;
  }

  return h;
}

function moveUp(second: BinaryTree, steps: number): BinaryTree {
  while (steps > 0 && second.parent !== undefined) {
    // tslint:disable-next-line
    second = second.parent;
    // tslint:disable-next-line
    steps -= 1;
  }

  return second;
}

function findPathIntersect(first: BinaryTree, second: BinaryTree): BinaryTree {
  while (
    first.parent !== undefined &&
    second.parent !== undefined &&
    first.parent !== second.parent
  ) {
    // tslint:disable-next-line
    first = first.parent;
    // tslint:disable-next-line
    second = second.parent;
  }

  return <BinaryTree>first.parent;
}

function firstCommonAncestor(
  root: BinaryTree,
  g: BinaryTree,
  h: BinaryTree
): number {
  const delta: number = height(g) - height(h);

  const first: BinaryTree = delta < 0 ? g : h; // shallower node
  let second: BinaryTree = delta > 0 ? h : g; // deeper

  second = moveUp(second, delta);

  return findPathIntersect(first, second).value;
}

export { firstCommonAncestor };
