/**
 * Test specs for add-one-to-number problem
 * Interviewbit - AddOneToNumber
 */

import { generateArray } from '@challenges/util';

import { addOneToNumber } from './add-one-to-number';

describe('Interviewbit - AddOneToNumber', () => {
  describe('addOneToNumber', () => {
    describe('Example tests', () => {
      it('should return 124 for Example 1 input [1, 2, 3]', () => {
        expect(addOneToNumber([1, 2, 3])).toEqual([1, 2, 4]);
      });

      it('should return 100 for Example 2 input [9, 9]', () => {
        expect(addOneToNumber([9, 9])).toEqual([1, 0, 0]);
      });
    });

    describe('Correctness tests', () => {
      it('should return 1235 for Sample 1 input [1, 2, 3, 4]', () => {
        expect(addOneToNumber([1, 2, 3, 4])).toEqual([1, 2, 3, 5]);
      });

      it('should return 4322 for Sample 2 input [4, 3, 2, 1]', () => {
        expect(addOneToNumber([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
      });

      it('should return 1 for Extreme 1 input []', () => {
        expect(addOneToNumber([])).toEqual([1]);
      });

      it('should return 10 for Extreme 2 input [0]', () => {
        expect(addOneToNumber([0])).toEqual([1]);
      });

      it('should return 10 for Extreme 3 input [0, 1, 2, 3]', () => {
        expect(addOneToNumber([0, 1, 2, 3])).toEqual([1, 2, 4]);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        addOneToNumber(generateArray(100));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        addOneToNumber(generateArray(10e3));
      });

      it('should run for Large 2 input of 50e3 items', () => {
        addOneToNumber(generateArray(50e3));
      });

      it('should run for Large 3 input of 100e3 items', () => {
        addOneToNumber(generateArray(100e3));
      });
    });
  });
});
