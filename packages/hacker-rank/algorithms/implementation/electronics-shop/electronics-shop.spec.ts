/**
 * Test specs for electronics-shop problem
 * @url https://www.hackerrank.com/challenges/electronics-shop/problem
 */

import { solveElectronicsShop } from './electronics-shop';

describe('ElectronicsShop', () => {
  describe('solveElectronicsShop', () => {
    it('should return 9', () => {
      expect(solveElectronicsShop([3, 1], [5, 2, 8], 10)).toEqual(9);
    });

    it('should return -1', () => {
      expect(solveElectronicsShop([4], [5], 5)).toEqual(-1);
    });
  });
});
