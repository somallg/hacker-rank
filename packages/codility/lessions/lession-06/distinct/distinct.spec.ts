/**
 * Test specs for distinct problem
 */

import { solveDistinct } from './distinct';

describe('Distinct', () => {
  describe('solveDistinct', () => {
    it('should return 3 when input ', () => {
      expect(solveDistinct([2, 1, 1, 2, 3, 1])).toEqual(3);
    });

    it('should return 1 when input ', () => {
      expect(solveDistinct([1, 1, 1, 1, 1, 1])).toEqual(1);
    });

    it('should return 2 when input ', () => {
      expect(solveDistinct([1, 1, 1, 1, 1, 2])).toEqual(2);
    });

    it('should return 2 when input ', () => {
      expect(solveDistinct([1, 1, 1, 1, 1, 2, 3, 4])).toEqual(4);
    });
  });
});
