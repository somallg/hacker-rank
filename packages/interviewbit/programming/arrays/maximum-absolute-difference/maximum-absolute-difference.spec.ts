/**
 * Test specs for maximum-absolute-difference problem
 * Interviewbit - MaximumAbsoluteDifference
 */

import { generateArray } from '@challenges/util';

import { maximumAbsoluteDifference } from './maximum-absolute-difference';

describe('Interviewbit - MaximumAbsoluteDifference', () => {
  describe('maximumAbsoluteDifference', () => {
    describe('Example tests', () => {
      it('should return 5 for Example 1 input [1, 3, -1]', () => {
        expect(maximumAbsoluteDifference([1, 3, -1])).toEqual(5);
      });
    });

    describe('Correctness tests', () => {
      it('should return 6 for Sample 1 input [1, 2, 3, 4]', () => {
        expect(maximumAbsoluteDifference([1, 2, 3, 4])).toEqual(6);
      });

      it('should return 6 for Sample 2 input [4, 3, 2, 1]', () => {
        expect(maximumAbsoluteDifference([4, 3, 2, 1])).toEqual(6);
      });

      it('should return 0 for Extreme input []', () => {
        expect(maximumAbsoluteDifference([])).toEqual(0);
      });

      it('should return 6 for All Negative input [-4, -3, -2, -1]', () => {
        expect(maximumAbsoluteDifference([-4, -3, -2, -1])).toEqual(6);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        maximumAbsoluteDifference(generateArray(100));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        maximumAbsoluteDifference(generateArray(10e3));
      });

      it('should run for Large 2 input of 50e3 items', () => {
        maximumAbsoluteDifference(generateArray(50e3));
      });

      it('should run for Large 3 input of 100e3 items', () => {
        maximumAbsoluteDifference(generateArray(100e3));
      });
    });
  });
});
