import { divisibleSumPairs } from './divisible-sum-pairs';

describe('Divisible Sum Pairs', () => {
  describe('divisibleSumPairs', () => {
    it('should return 5 when input 6 3 [1, 3, 2, 6, 1, 2]', () => {
      expect(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])).toEqual(5);
    });
  });
});
