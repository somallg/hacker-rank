import { bubbleSort } from './bubble-sort';

describe('bubble sort', () => {
  it('should sort correctly', () => {
    const nums: number[] = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    bubbleSort(nums);

    expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
