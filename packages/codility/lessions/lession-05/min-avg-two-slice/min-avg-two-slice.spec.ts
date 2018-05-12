/**
 * Test specs for min-avg-two-slice problem
 */

import { solveMinAvgTwoSlice } from './min-avg-two-slice';

describe('MinAvgTwoSlice', () => {
  describe('solveMinAvgTwoSlice', () => {
    it('should return 1 when input ', () => {
      expect(solveMinAvgTwoSlice([4, 2, 2, 5, 1, 5, 8])).toEqual(1);
    });

    it('should return 4 when input ', () => {
      expect(solveMinAvgTwoSlice([4, 2, 2, 5, 1, 1, 8])).toEqual(4);
    });

    it('should return 4 when input ', () => {
      expect(solveMinAvgTwoSlice([1, 8, 2, 5, 1, 1, 8])).toEqual(4);
    });

    it('should return 5 when input ', () => {
      expect(solveMinAvgTwoSlice([4, 2, 3, 5, 2, 3, 1, 8])).toEqual(4);
    });

    it('should return 1 when best slice has length 3', () => {
      expect(solveMinAvgTwoSlice([5, 2, 5, 1, 9])).toEqual(1);
    });
  });
});
