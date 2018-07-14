/**
 * Test specs for prefixSums
 */

import { prefixSums, countTotal } from './prefix-sums';

describe('prefixSums', () => {
  describe('prefixSums', () => {
    it('should return correctly when input ', () => {
      expect(prefixSums([1, 2, 3, 4])).toEqual([0, 1, 3, 6, 10]);
    });
  });

  describe('countTotal', () => {
    it('should work', () => {
      expect(countTotal([0, 1, 3, 6, 10], 1, 3)).toEqual(9);
    });
  });
});
