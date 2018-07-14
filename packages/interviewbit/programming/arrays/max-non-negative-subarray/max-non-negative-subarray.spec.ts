/**
 * Test specs for max-non-negative-subarray problem
 * Interviewbit - MaxNonNegativeSubarray
 */

import { generateArray } from '@challenges/util';

import { maxNonNegativeSubarray } from './max-non-negative-subarray';

describe('Interviewbit - MaxNonNegativeSubarray', () => {
  describe('maxNonNegativeSubarray', () => {
    describe('Example tests', () => {
      it('should return [1, 2, 5] for Example 1 input [1, 2, 5, -7, 2, 3]', () => {
        expect(maxNonNegativeSubarray([1, 2, 5, -7, 2, 3])).toEqual([1, 2, 5]);
      });
    });

    describe('Correctness tests', () => {
      it('should return [1, 2, 3, 4] for Sample 1 input [1, 2, 3, 4]', () => {
        expect(maxNonNegativeSubarray([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
      });

      it('should return [] for Extreme input []', () => {
        expect(maxNonNegativeSubarray([])).toEqual([]);
      });

      it('should return [0, 0] for Extreme input [0, 0, -1, 0]', () => {
        expect(maxNonNegativeSubarray([0, 0, -1, 0])).toEqual([0, 0]);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        maxNonNegativeSubarray(generateArray(100));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        maxNonNegativeSubarray(generateArray(10e3));
      });
    });
  });
});
