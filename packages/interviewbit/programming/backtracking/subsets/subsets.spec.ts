/**
 * Test specs for subsets problem
 * Interviewbit - Subsets
 */

import { generateArray } from '@challenges/util';

import { subsets } from './subsets';

describe('Interviewbit - Subsets', () => {
  describe('subsets', () => {
    describe('Example tests', () => {
      it('should return for Example 1 input [2, 3]', () => {
        expect(subsets([2, 3])).toEqual([[], [2], [2, 3], [3]]);
      });

      it('should return for Example 1 input [1, 2, 3]', () => {
        expect(subsets([1, 2, 3])).toEqual([
          [],
          [1],
          [1, 2],
          [1, 2, 3],
          [1, 3],
          [2],
          [2, 3],
          [3]
        ]);
      });
    });

    describe('Correctness tests', () => {
      it('should return for Example 1 input [3, 2, 1]', () => {
        expect(subsets([3, 2, 1])).toEqual([
          [],
          [1],
          [1, 2],
          [1, 2, 3],
          [1, 3],
          [2],
          [2, 3],
          [3]
        ]);
      });

      it('should return for Extram 1 input []', () => {
        expect(subsets([])).toEqual([[]]);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 10 items', () => {
        subsets(generateArray(10));
      });
    });
  });
});
