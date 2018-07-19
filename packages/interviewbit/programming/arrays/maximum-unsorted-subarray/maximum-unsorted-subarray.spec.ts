/**
 * Test specs for maximum-unsorted-subarray problem
 * Interviewbit - MaximumUnsortedSubarray
 */

import { generateArray } from '@challenges/util';

import { maximumUnsortedSubarray } from './maximum-unsorted-subarray';

describe('Interviewbit - MaximumUnsortedSubarray', () => {
  describe('maximumUnsortedSubarray', () => {
    describe('Example tests', () => {
      it('should return [1, 2] for Example 1 input []', () => {
        expect(maximumUnsortedSubarray([1, 3, 2, 4, 5])).toEqual([1, 2]);
      });

      it('should return [-1] for Example 2 input [1, 2, 3, 4, 5]', () => {
        expect(maximumUnsortedSubarray([1, 2, 3, 4, 5])).toEqual([-1]);
      });

      it('should return [1, 3] for Example 3 input [4, 15, 4, 4, 15, 18, 20]', () => {
        expect(maximumUnsortedSubarray([4, 15, 4, 4, 15, 18, 20])).toEqual([
          1,
          3
        ]);
      });
    });

    describe('Correctness tests', () => {
      it('should return [0, 3] for Sample 1 input [4, 3, 2, 1]', () => {
        expect(maximumUnsortedSubarray([4, 3, 2, 1])).toEqual([0, 3]);
      });

      it('should return [-1] for Extreme input [1]', () => {
        expect(maximumUnsortedSubarray([1])).toEqual([-1]);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        maximumUnsortedSubarray(generateArray(100));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        maximumUnsortedSubarray(generateArray(10e3));
      });

      it('should run for Large 2 input of 50e3 items', () => {
        maximumUnsortedSubarray(generateArray(50e3));
      });

      it('should run for Large 3 input of 100e3 items', () => {
        maximumUnsortedSubarray(generateArray(100e3));
      });
    });
  });
});
