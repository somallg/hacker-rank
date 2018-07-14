/**
 * Test specs for largest-number problem
 * Interviewbit - LargestNumber
 */

import { generateArray } from '@challenges/util';

import { largestNumber } from './largest-number';

describe('Interviewbit - LargestNumber', () => {
  describe('largestNumber', () => {
    describe('Example tests', () => {
      it('should return 9534330 for Example 1 input [3, 30, 34, 5, 9]', () => {
        expect(largestNumber([3, 30, 34, 5, 9])).toEqual('9534330');
      });

      it('should return 999999799898 for Example 2 input [9, 99, 98, 998, 9997]', () => {
        expect(largestNumber([9, 99, 98, 998, 9997])).toEqual('999999799898');
      });

      it('should return 29829271 for Example 3 input [29, 298, 271]', () => {
        expect(largestNumber([29, 298, 271])).toEqual('29829271');
      });
    });

    describe('Correctness tests', () => {
      it('should return for Sample 1 input [1, 2, 3, 4]', () => {
        expect(largestNumber([1, 2, 3, 4])).toEqual('4321');
      });

      it('should return for Sample 1 input [485, 472, 4, 412]', () => {
        expect(largestNumber([485, 472, 4, 412])).toEqual('4854724412');
      });

      it('should return _ for Extreme input []', () => {
        expect(largestNumber([])).toEqual('');
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        largestNumber(generateArray(100));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        largestNumber(generateArray(10e3));
      });
    });
  });
});
