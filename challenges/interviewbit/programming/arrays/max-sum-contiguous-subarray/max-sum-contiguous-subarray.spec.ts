/**
 * Test specs for max-sum-contiguous-subarray problem
 * Interviewbit - MaxSumContiguousSubarray
 */

import { generateArray } from '@challenges/util';

import { maxSumContiguousSubarray } from './max-sum-contiguous-subarray';

describe('Interviewbit - MaxSumContiguousSubarray', () => {
  describe('maxSumContiguousSubarray', () => {
    describe('Example tests', () => {
      it('should return 6 for Example 1 input [-2,1,-3,4,-1,2,1,-5,4]', () => {
        expect(
          maxSumContiguousSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
        ).toEqual(6);
      });
    });

    describe('Correctness tests', () => {
      it('should return 10 for Sample 1 input [1, 2, 3, 4]', () => {
        expect(maxSumContiguousSubarray([1, 2, 3, 4])).toEqual(10);
      });

      it('should return 10 for Sample 2 input [4, 3, 2, 1]', () => {
        expect(maxSumContiguousSubarray([4, 3, 2, 1])).toEqual(10);
      });

      it('should return 0 for Extreme input []', () => {
        expect(maxSumContiguousSubarray([])).toEqual(0);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        maxSumContiguousSubarray(generateArray(100));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        maxSumContiguousSubarray(generateArray(10e3));
      });

      it('should run for Large 2 input of 50e3 items', () => {
        maxSumContiguousSubarray(generateArray(50e3));
      });

      it('should run for Large 3 input of 100e3 items', () => {
        maxSumContiguousSubarray(generateArray(100e3));
      });
    });
  });
});
