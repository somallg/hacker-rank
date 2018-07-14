/**
 * Test specs for find-duplicate-in-array problem
 * Interviewbit - FindDuplicateInArray
 */

import { generateArray } from '@challenges/util';

import { findDuplicateInArray } from './find-duplicate-in-array';

describe('Interviewbit - FindDuplicateInArray', () => {
  describe('findDuplicateInArray', () => {
    describe('Example tests', () => {
      it('should return 1 for Example 1 input [3, 4, 1, 4, 1]', () => {
        expect(findDuplicateInArray([3, 4, 1, 4, 1])).toEqual(4);
      });
    });

    describe('Correctness tests', () => {
      it('should return -1 for Sample 1 input [1, 2, 3, 4]', () => {
        expect(findDuplicateInArray([1, 2, 3, 4])).toEqual(-1);
      });

      it('should return -1 for Extreme input []', () => {
        expect(findDuplicateInArray([])).toEqual(-1);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        findDuplicateInArray(generateArray(100));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        findDuplicateInArray(generateArray(10e3));
      });

      it('should run for Large 2 input of 50e3 items', () => {
        findDuplicateInArray(generateArray(50e3));
      });

      it('should run for Large 3 input of 100e3 items', () => {
        findDuplicateInArray(generateArray(100e3));
      });
    });
  });
});
