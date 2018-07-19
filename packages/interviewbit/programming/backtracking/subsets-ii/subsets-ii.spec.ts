/**
 * Test specs for subsets-ii problem
 * Interviewbit - SubsetsIi
 */

import { generateArray } from '@challenges/util';

import { subsetsIi } from './subsets-ii';

describe('Interviewbit - SubsetsIi', () => {
  describe('subsetsIi', () => {
    describe('Example tests', () => {
      it('should return for Example 1 input [1, 2, 2]', () => {
        expect(subsetsIi([1, 2, 2])).toEqual([
          [],
          [1],
          [1, 2],
          [1, 2, 2],
          [2],
          [2, 2]
        ]);
      });
    });

    describe('Correctness tests', () => {
      it('should return for Sample 1 input [1, 2, 3, 4]', () => {
        expect(subsetsIi([1, 2, 3, 4])).toEqual([
          [],
          [1],
          [1, 2],
          [1, 2, 3],
          [1, 2, 3, 4],
          [1, 2, 4],
          [1, 3],
          [1, 3, 4],
          [1, 4],
          [2],
          [2, 3],
          [2, 3, 4],
          [2, 4],
          [3],
          [3, 4],
          [4]
        ]);
      });

      it('should return [] for Extreme input []', () => {
        expect(subsetsIi([])).toEqual([[]]);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 10 items', () => {
        subsetsIi(generateArray(10));
      });

      it('should run for Medium 2 input of 20 items', () => {
        subsetsIi(generateArray(20));
      });
    });
  });
});
