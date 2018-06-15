/**
 * Test specs for maximum-subarray problem
 * Leetcode - MaximumSubarray
 */

import { generateArray } from '@challenges/util';

import { maximumSubarray } from './maximum-subarray';

describe('Leetcode - MaximumSubarray', () => {
  describe('maximumSubarray', () => {
    describe('Example tests', () => {
      it('should return 6 for Example 1 input [-2,1,-3,4,-1,2,1,-5,4]', () => {
        expect(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
      });
    });

    describe('Correctness tests', () => {
      it('should return 10 for Sample 1 input [1, 2, 3, 4]', () => {
        expect(maximumSubarray([1, 2, 3, 4])).toEqual(10);
      });

      it('should return 10 for Sample 2 input [4, 3, 2, 1]', () => {
        expect(maximumSubarray([4, 3, 2, 1])).toEqual(10);
      });

      it('should return 0 for Extreme input []', () => {
        expect(maximumSubarray([])).toEqual(0);
      });

      it('should return -1 for All Negative input [-2, -1]', () => {
        expect(maximumSubarray([-2, -1])).toEqual(-1);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        maximumSubarray(generateArray(100));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        maximumSubarray(generateArray(10e3));
      });

      it('should run for Large 2 input of 50e3 items', () => {
        maximumSubarray(generateArray(50e3));
      });

      it('should run for Large 3 input of 100e3 items', () => {
        maximumSubarray(generateArray(100e3));
      });
    });
  });
});
