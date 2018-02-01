import { getTotalX } from './between-two-sets';

describe('Between Two Sets', () => {
  describe('getTotalX', () => {
    it('should return 3 when input [2, 4] [16, 32, 96]', () => {
      expect(getTotalX([2, 4], [16, 32, 96])).toEqual(3);
    });
    it('should return 0 when input [2, 4] [3]', () => {
      expect(getTotalX([2, 4], [3])).toEqual(0);
    });
  });
});
