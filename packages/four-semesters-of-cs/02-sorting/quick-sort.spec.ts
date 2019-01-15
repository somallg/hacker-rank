import { quickSort } from './quick-sort';

describe('quickSort', () => {
  it('quicksort an array', () => {
    const input: number[] = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
    const answer: number[] = quickSort(input);

    expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
