import { Node, Tree } from './binary-search-tree';

// tslint:disable:cyclomatic-complexity
describe('Binary Search Tree', () => {
  it('creates a correct tree', () => {
    const nums: number[] = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
    const tree: Tree<number> = new Tree();
    nums.forEach((num: number) => tree.add(num));
    const objs: Node<number> = tree.toObject();

    expect(objs.value).toEqual(3);

    if (objs.left) {
      expect(objs.left.value).toEqual(1);
      expect(objs.left.left).toBeUndefined();
    }

    if (objs.left && objs.left.right) {
      expect(objs.left.right.value).toEqual(2);
      expect(objs.left.right.left).toBeUndefined();
      expect(objs.left.right.right).toBeUndefined();
    }

    if (objs.right) {
      expect(objs.right.value).toEqual(7);
    }

    if (objs.right && objs.right.left) {
      expect(objs.right.left.value).toEqual(4);
      expect(objs.right.left.left).toBeUndefined();
    }

    if (
      objs.right &&
      objs.right.left &&
      objs.right.left.right &&
      objs.right.left.right.left
    ) {
      expect(objs.right.left.right.value).toEqual(6);
      expect(objs.right.left.right.left.value).toEqual(5);
      expect(objs.right.left.right.left.right).toBeUndefined();
      expect(objs.right.left.right.left.left).toBeUndefined();
    }

    if (objs.right && objs.right.right) {
      expect(objs.right.right.value).toEqual(10);
      expect(objs.right.right.right).toBeUndefined();
    }

    if (objs.right && objs.right.right && objs.right.right.left) {
      expect(objs.right.right.left.value).toEqual(9);
      expect(objs.right.right.left.right).toBeUndefined();
    }

    if (
      objs.right &&
      objs.right &&
      objs.right.right &&
      objs.right.right.left &&
      objs.right.right.left.left
    ) {
      expect(objs.right.right.left.left.value).toEqual(8);
      expect(objs.right.right.left.left.right).toBeUndefined();
      expect(objs.right.right.left.left.left).toBeUndefined();
    }
  });
});
