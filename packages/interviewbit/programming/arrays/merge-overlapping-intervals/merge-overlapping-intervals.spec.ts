/**
 * Test specs for merge-overlapping-intervals problem
 * Interviewbit - MergeOverlappingIntervals
 */

import { mergeOverlappingIntervals } from './merge-overlapping-intervals';

describe('Interviewbit - MergeOverlappingIntervals', () => {
  describe('mergeOverlappingIntervals', () => {
    describe('Example tests', () => {
      it('should return _ for Example 1 input []', () => {
        expect(
          mergeOverlappingIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])
        ).toEqual([[1, 6], [8, 10], [15, 18]]);
      });

      it('shoudl return for Example 2 input', () => {
        expect(
          mergeOverlappingIntervals([
            [1, 10],
            [2, 9],
            [3, 8],
            [4, 7],
            [5, 6],
            [6, 6]
          ])
        ).toEqual([[1, 10]]);
      });
    });

    describe('Correctness tests', () => {
      it('should return _ for Extreme 1 input []', () => {
        expect(mergeOverlappingIntervals([])).toEqual([]);
      });
    });
  });
});
