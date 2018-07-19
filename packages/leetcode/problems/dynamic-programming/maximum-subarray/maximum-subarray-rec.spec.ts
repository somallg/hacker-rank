/**
 * Test specs for maximum-subarray problem
 * Leetcode - MaximumSubarray
 */

import { generateArray } from '@challenges/util';

import { maximumSubarrayRec } from './maximum-subarray-rec';

describe('Leetcode - MaximumSubarray', () => {
  describe('maximumSubarrayRec', () => {
    describe('Example tests', () => {
      it('should return 6 for Example 1 input [-2,1,-3,4,-1,2,1,-5,4]', () => {
        expect(maximumSubarrayRec([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
      });
    });

    describe('Correctness tests', () => {
      it('should return 10 for Sample 1 input [1, 2, 3, 4]', () => {
        expect(maximumSubarrayRec([1, 2, 3, 4])).toEqual(10);
      });

      it('should return 10 for Sample 2 input [4, 3, 2, 1]', () => {
        expect(maximumSubarrayRec([4, 3, 2, 1])).toEqual(10);
      });

      it('should return 0 for Extreme input []', () => {
        expect(maximumSubarrayRec([])).toEqual(0);
      });

      it('should return -1 for All Negative input [-2, -1]', () => {
        expect(maximumSubarrayRec([-2, -1])).toEqual(-1);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        maximumSubarrayRec(generateArray(100));
      });

      it('should run for Medium 2 input of 1e3 items', () => {
        maximumSubarrayRec(generateArray(1e3));
      });
    });
  });
});
