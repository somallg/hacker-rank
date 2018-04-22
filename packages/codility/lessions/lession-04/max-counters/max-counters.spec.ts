/**
 * Test specs for max-counters problem
 */

import { solveMaxCounters } from './max-counters';

describe('MaxCounters', () => {
  describe('solveMaxCounters', () => {
    it('should return correctly when input ', () => {
      expect(solveMaxCounters(5, [3, 4, 4, 6, 1, 4, 4])).toEqual([
        3,
        2,
        2,
        4,
        2
      ]);
    });

    it('should return when input ', () => {
      expect(solveMaxCounters(5, [6, 6, 6, 6, 6])).toEqual([0, 0, 0, 0, 0]);
    });

    it('should return when input ', () => {
      expect(solveMaxCounters(5, [1, 1, 1, 1, 1])).toEqual([5, 0, 0, 0, 0]);
    });

    it('should return when input ', () => {
      expect(solveMaxCounters(5, [1, 2, 3, 4, 5])).toEqual([1, 1, 1, 1, 1]);
    });

    it('should return when input ', () => {
      expect(solveMaxCounters(5, [6, 6, 6, 6, 6])).toEqual([0, 0, 0, 0, 0]);
    });

    it('should return when input ', () => {
      expect(solveMaxCounters(5, [1, 6, 1, 6, 1])).toEqual([3, 2, 2, 2, 2]);
    });
  });
});
