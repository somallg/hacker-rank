import _ from 'underscore';

import { heapSort } from './heap-sort';

describe('heap sort', () => {
  it('should sort correctly', () => {
    const nums = [2, 5, 3, 8, 10, 6, 4, 7, 9, 1];
    heapSort(nums);
    expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should sort correctly', () => {
    const fill = 50;
    const nums = _.shuffle(new Array(fill).fill().map((_, index) => index + 1));
    heapSort(nums);
    expect(nums).toEqual(new Array(fill).fill().map((_, index) => index + 1));
  });
});
