import { Node, Tree } from './avl-tree';

describe('AVL Tree', () => {
  it('creates a correct tree', () => {
    const nums: number[] = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
    const tree: Tree = new Tree();
    nums.forEach((num: number) => tree.add(num));
    const objs: Node = tree.toObject();

    expect(objs.value).toEqual(4);

    if (objs.left) {
      expect(objs.left.value).toEqual(2);
    }

    if (objs.left && objs.left.left) {
      expect(objs.left.left.value).toEqual(1);
      expect(objs.left.left.left).toBeUndefined();
      expect(objs.left.left.right).toBeUndefined();
    }

    if (objs.left && objs.left.right) {
      expect(objs.left.right.value).toEqual(3);
      expect(objs.left.right.left).toBeUndefined();
      expect(objs.left.right.right).toBeUndefined();
    }

    if (objs.right) {
      expect(objs.right.value).toEqual(7);
    }

    if (objs.right && objs.right.left) {
      expect(objs.right.left.value).toEqual(6);
      expect(objs.right.left.right).toBeUndefined();
    }

    if (objs.right && objs.right.left && objs.right.left.left) {
      expect(objs.right.left.left.value).toEqual(5);
      expect(objs.right.left.left.left).toBeUndefined();
      expect(objs.right.left.left.right).toBeUndefined();
    }

    if (objs.right && objs.right.right) {
      expect(objs.right.right.value).toEqual(9);
    }

    if (objs.right && objs.right.right && objs.right.right.left) {
      expect(objs.right.right.left.value).toEqual(8);
      expect(objs.right.right.left.left).toBeUndefined();
      expect(objs.right.right.left.right).toBeUndefined();
    }

    if (objs.right && objs.right.right && objs.right.right.right) {
      expect(objs.right.right.right.value).toEqual(10);
      expect(objs.right.right.right.left).toBeUndefined();
      expect(objs.right.right.right.right).toBeUndefined();
    }
  });
});
