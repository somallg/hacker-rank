/**
 * Test specs for single-number-ii problem
 * SingleNumberIi
 */

import { generateArray } from '@challenges/util';

import { singleNumberIi } from './single-number-ii';

describe('Interviewbit - SingleNumberIi', () => {
  describe('singleNumberIi', () => {
    describe('Example Tests', () => {
      it('should return correctly for Example 1 input', () =>
        expect(singleNumberIi([1, 2, 4, 3, 3, 2, 2, 3, 1, 1])).toEqual(4));
    });

    describe('Correctness Tests', () => {
      it('should return correctly for Sample 1 input', () =>
        expect(singleNumberIi([1, 1, 1, 2])).toEqual(2));

      it('should return correctly for Extreme 1 input', () =>
        expect(singleNumberIi([])).toEqual(0));

      it('should return correctly for Extreme 2 input', () =>
        expect(singleNumberIi([1])).toEqual(1));
    });

    describe('Performance Tests', () => {
      it('should run for Medium 1 input', () =>
        expect(singleNumberIi(generateArray(100))).toBeDefined());

      it('should run for Medium 2 input', () =>
        expect(singleNumberIi(generateArray(1e3))).toBeDefined());

      it('should run for Large 1 input', () =>
        expect(singleNumberIi(generateArray(10e3))).toBeDefined());

      it('should run for Large 2 input', () =>
        expect(singleNumberIi(generateArray(50e3))).toBeDefined());

      it('should run for Large 3 input', () =>
        expect(singleNumberIi(generateArray(100e3))).toBeDefined());
    });
  });
});
