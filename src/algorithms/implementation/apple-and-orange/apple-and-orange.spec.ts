import { countApplesAndOranges } from './apple-and-orange';

describe('Apple and Orange', () => {
  describe('countApplesAndOranges', () => {
    it('should return correct', () => {
      expect(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])).toEqual([1, 1]);
    });
  })
})
