/**
 * Test specs for number-of-1-bits problem
 * NumberOf1Bits
 */

import { numberOf1Bits } from './number-of-1-bits';

describe('Interviewbit - NumberOf1Bits', () => {
  describe('numberOf1Bits', () => {
    describe('Example Tests', () => {
      it('should return correctly for Example 1 input', () =>
        expect(numberOf1Bits(11)).toEqual(3));

      it('should return correctly for Example 2 input', () =>
        expect(numberOf1Bits(5)).toEqual(2));

      it('should return correctly for Example 3 input', () =>
        expect(numberOf1Bits(4)).toEqual(1));
    });

    describe('Correctness Tests', () => {
      it('should return correctly for Sample 1 input', () =>
        expect(numberOf1Bits(2)).toEqual(1));

      it('should return correctly for Sample 2 input', () =>
        expect(numberOf1Bits(10)).toEqual(2));

      it('should return correctly for Extreme 1 input', () =>
        expect(numberOf1Bits(0)).toEqual(0));

      it('should return correctly for Extreme 2 input', () =>
        expect(numberOf1Bits(1)).toEqual(1));
    });

    describe('Performance Tests', () => {
      it('should run for Medium 1 input', () =>
        expect(numberOf1Bits(100)).toBeDefined());

      it('should run for Medium 2 input', () =>
        expect(numberOf1Bits(1e3)).toBeDefined());

      it('should run for Large 1 input', () =>
        expect(numberOf1Bits(10e3)).toBeDefined());

      it('should run for Large 2 input', () =>
        expect(numberOf1Bits(50e3)).toBeDefined());

      it('should run for Large 3 input', () =>
        expect(numberOf1Bits(100e3)).toBeDefined());
    });
  });
});
