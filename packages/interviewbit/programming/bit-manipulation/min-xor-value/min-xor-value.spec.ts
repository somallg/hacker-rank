/**
 * Test specs for min-xor-value problem
 * MinXorValue
 */

import { generateArray } from '@challenges/util';

import { minXorValue } from './min-xor-value';

describe('Interviewbit - MinXorValue', () => {
  describe('minXorValue', () => {
    describe('Example Tests', () => {
      it('should return correctly for Example 1 input', () =>
        expect(minXorValue([0, 2, 5, 7])).toEqual(2));

      it('should return correctly for Example 2 input', () =>
        expect(minXorValue([0, 4, 7, 9])).toEqual(3));

      it('should return correctly for Example 2 input', () =>
        expect(minXorValue([15, 5, 1, 10, 2])).toEqual(3));
    });

    describe('Correctness Tests', () => {
      it('should return correctly for Sample 1 input', () =>
        expect(minXorValue([1, 2, 3, 4])).toEqual(1));

      it('should return correctly for Extreme 1 input', () =>
        expect(minXorValue([])).toEqual(0));

      it('should return correctly for Extreme 2 input', () =>
        expect(minXorValue([1, 1, 1, 1])).toEqual(0));
    });

    describe('Performance Tests', () => {
      it('should run for Medium 1 input', () =>
        expect(minXorValue(generateArray(100))).toBeDefined());

      it('should run for Medium 2 input', () =>
        expect(minXorValue(generateArray(1e3))).toBeDefined());

      it('should run for Large 1 input', () =>
        expect(minXorValue(generateArray(10e3))).toBeDefined());

      it('should run for Large 2 input', () =>
        expect(minXorValue(generateArray(50e3))).toBeDefined());

      it('should run for Large 3 input', () =>
        expect(minXorValue(generateArray(100e3))).toBeDefined());
    });
  });
});
