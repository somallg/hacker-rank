/**
 * Test specs for valid-number problem
 * ValidNumber
 */

import { generateArray } from '@challenges/util';

import { validNumber } from './valid-number';

describe('Interviewbit - ValidNumber', () => {
  describe('validNumber', () => {
    describe('Example Tests', () => {
      it('should return correctly for Example 1 input', () =>
        expect(validNumber('0')).toMatchSnapshot());

      it('should return correctly for Example 2 input', () =>
        expect(validNumber('0.1')).toMatchSnapshot());

      it('should return correctly for Example 3 input', () =>
        expect(validNumber('abc')).toMatchSnapshot());

      it('should return correctly for Example 4 input', () =>
        expect(validNumber('3.')).toMatchSnapshot());

      it('should return correctly for Example 5 input', () =>
        expect(validNumber('.2')).toMatchSnapshot());
    });

    describe('Correctness Tests', () => {
      it('should return correctly for Sample 1 input', () =>
        expect(validNumber('1 a')).toMatchSnapshot());

      it('should return correctly for Sample 2 input', () =>
        expect(validNumber('2e10')).toMatchSnapshot());

      it('should return correctly for Sample 3 input', () =>
        expect(validNumber('-01.1e-10')).toMatchSnapshot());

      it('should return correctly for Extreme 1 input', () =>
        expect(validNumber('')).toMatchSnapshot());

      it('should return correctly for Extreme 2 input', () =>
        expect(validNumber('   ')).toMatchSnapshot());
    });

    describe('Performance Tests', () => {
      it('should run for Medium 1 input', () =>
        expect(
          validNumber(
            generateArray(100)
              .map(String)
              .join('')
          )
        ).toBeDefined());

      it('should run for Medium 2 input', () =>
        expect(
          validNumber(
            generateArray(1e3)
              .map(String)
              .join('')
          )
        ).toBeDefined());

      it('should run for Large 1 input', () =>
        expect(
          validNumber(
            generateArray(10e3)
              .map(String)
              .join('')
          )
        ).toBeDefined());

      it('should run for Large 2 input', () =>
        expect(
          validNumber(
            generateArray(50e3)
              .map(String)
              .join('')
          )
        ).toBeDefined());

      it('should run for Large 3 input', () =>
        expect(
          validNumber(
            generateArray(100e3)
              .map(String)
              .join('')
          )
        ).toBeDefined());
    });
  });
});
