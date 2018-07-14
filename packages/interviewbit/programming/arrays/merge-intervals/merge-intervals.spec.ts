/**
 * Test specs for merge-intervals problem
 * Interviewbit - MergeIntervals
 */

import { mergeIntervals } from './merge-intervals';

describe('Interviewbit - MergeIntervals', () => {
  describe('mergeIntervals', () => {
    describe('Example tests', () => {
      it('should return for Example 1 input [1, 3], [6, 9]', () => {
        expect(mergeIntervals([[1, 3], [6, 9]], [2, 5])).toEqual([
          [1, 5],
          [6, 9]
        ]);
      });

      it('should return for Example 2 input [[1,2],[3,5],[6,7],[8,10],[12,16]]', () => {
        expect(
          mergeIntervals([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 9])
        ).toEqual([[1, 2], [3, 10], [12, 16]]);
      });
    });

    describe('Correctness tests', () => {
      it('should return _ for Sample 1 input [[1, 2], [3, 4]]', () => {
        expect(mergeIntervals([[1, 2], [3, 4]], [1, 3])).toEqual([[1, 4]]);
      });

      it('should return for Extreme 1 input [], [1, 2]', () => {
        expect(mergeIntervals([], [1, 2])).toEqual([[1, 2]]);
      });

      it('should return for Extreme 2 input [], []', () => {
        expect(mergeIntervals([], [])).toEqual([[]]);
      });

      it('should return for Extreme 3 input [[1, 2], [3, 6]], [8, 10]', () => {
        expect(mergeIntervals([[1, 2], [3, 6]], [8, 10])).toEqual([
          [1, 2],
          [3, 6],
          [8, 10]
        ]);
      });

      it('should return for Extreme 4 input [[3, 6], [8, 10]], [1, 2]', () => {
        expect(mergeIntervals([[1, 2], [3, 6]], [8, 10])).toEqual([
          [1, 2],
          [3, 6],
          [8, 10]
        ]);
      });

      it('should return for Extreme 5 input [[1, 2], [8, 10]], [3, 6]', () => {
        expect(mergeIntervals([[1, 2], [8, 10]], [3, 6])).toEqual([
          [1, 2],
          [3, 6],
          [8, 10]
        ]);
      });
    });
  });
});
