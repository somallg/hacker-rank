/**
 * Test specs for frog-river-one problem
 * @url https://www.hackerrank.com/challenges/frog-river-one/problem
 */

import { solveFrogRiverOne } from './frog-river-one';

describe('FrogRiverOne', () => {
  describe('solveFrogRiverOne', () => {
    it('should return 2 when input ', () => {
      expect(solveFrogRiverOne(1, [1, 1, 1, 4, 2, 3, 5, 4])).toEqual(0);
    });

    it('should return 1 when input ', () => {
      expect(solveFrogRiverOne(2, [2, 1, 1, 4, 2, 3, 5, 4])).toEqual(1);
    });

    it('should return 6 when input ', () => {
      expect(solveFrogRiverOne(5, [1, 3, 1, 4, 2, 3, 5, 4])).toEqual(6);
    });

    it('should return -1 when input ', () => {
      expect(solveFrogRiverOne(5, [1, 1, 1, 1, 1, 1, 1, 1])).toEqual(-1);
    });
  });
});
