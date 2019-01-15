import * as _ from 'underscore';

import { radixSort } from './radix-sort';

describe('radix sort', () => {
  it('should sort correctly', () => {
    const nums: number[] = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans: number[] = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });

  xit('should sort correctly', () => {
    const fill: number = 99;
    const nums: number[] = Array(fill)
      .fill(0)
      // tslint:disable:insecure-random
      .map(() => Math.floor(Math.random() * 500000));
    const ans: number[] = radixSort(nums);

    // tslint:disable:underscore-consistent-invocation
    expect(ans).toEqual(_.sortBy(nums));
  });
});
