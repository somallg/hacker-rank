import { shuffle } from 'underscore';

import { heapSort } from './heap-sort';

describe('heap sort', () => {
  it('should sort correctly', () => {
    const nums: number[] = [2, 5, 3, 8, 10, 6, 4, 7, 9, 1];
    heapSort(nums);
    expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should sort correctly', () => {
    const fill: number = 50;
    const nums: number[] = shuffle(
      Array(fill)
        .fill(0)
        .map((_: number, index: number) => index + 1)
    );
    heapSort(nums);
    expect(nums).toEqual(
      Array(fill)
        .fill(0)
        .map((_: number, index: number) => index + 1)
    );
  });
});
