/**
 * Test specs for max-product-of-three problem
 */

import { solveMaxProductOfThree } from './max-product-of-three';

describe('MaxProductOfThree', () => {
  describe('solveMaxProductOfThree', () => {
    it('should 60 return when input ', () => {
      expect(solveMaxProductOfThree([-3, 1, 2, -2, 5, 6])).toEqual(60);
    });

    it('should return 108 when input ', () => {
      expect(solveMaxProductOfThree([-9, 1, 2, -2, 5, 6])).toEqual(108);
    });

    it('should return -4 when input all negative', () => {
      expect(solveMaxProductOfThree([-9, -1, -2, -2, -5, -6])).toEqual(-4);
    });
  });
});
