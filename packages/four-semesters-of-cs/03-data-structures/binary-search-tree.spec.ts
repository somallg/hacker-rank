import { Tree } from './binary-search-tree';

describe('Binary Search Tree', () => {
  it('creates a correct tree', () => {
    const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
    const tree = new Tree();
    nums.map(num => tree.add(num));
    const objs = tree.toObject();

    expect(objs.value).toEqual(3);

    if (objs.left) {
      expect(objs.left.value).toEqual(1);
      expect(objs.left.left).toBeNull();
    }

    if (objs.left && objs.left.right) {
      expect(objs.left.right.value).toEqual(2);
      expect(objs.left.right.left).toBeNull();
      expect(objs.left.right.right).toBeNull();
    }

    if (objs.right) {
      expect(objs.right.value).toEqual(7);
    }

    if (objs.right && objs.right.left) {
      expect(objs.right.left.value).toEqual(4);
      expect(objs.right.left.left).toBeNull();
    }

    if (
      objs.right &&
      objs.right.left &&
      objs.right.left.right &&
      objs.right.left.right.left
    ) {
      expect(objs.right.left.right.value).toEqual(6);
      expect(objs.right.left.right.left.value).toEqual(5);
      expect(objs.right.left.right.left.right).toBeNull();
      expect(objs.right.left.right.left.left).toBeNull();
    }

    if (objs.right && objs.right.right) {
      expect(objs.right.right.value).toEqual(10);
      expect(objs.right.right.right).toBeNull();
    }

    if (objs.right && objs.right.right && objs.right.right.left) {
      expect(objs.right.right.left.value).toEqual(9);
      expect(objs.right.right.left.right).toBeNull();
    }

    if (
      objs.right &&
      objs.right &&
      objs.right.right &&
      objs.right.right.left &&
      objs.right.right.left.left
    ) {
      expect(objs.right.right.left.left.value).toEqual(8);
      expect(objs.right.right.left.left.right).toBeNull();
      expect(objs.right.right.left.left.left).toBeNull();
    }
  });
});
