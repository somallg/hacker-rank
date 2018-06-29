/**
 * Test specs for noble-integer problem
 * Interviewbit - NobleInteger
 */

import { generateArray } from '@challenges/util';

import { nobleInteger } from './noble-integer';

describe('Interviewbit - NobleInteger', () => {
  describe('nobleInteger', () => {
    describe('Example tests', () => {
      it('should return -1 for Example 1 input [6, 5, 7]', () => {
        expect(nobleInteger([6, 5, 7])).toEqual(-1);
      });
    });

    describe('Correctness tests', () => {
      it('should return -1 for Sample 1 input [1, 2, 3, 4]', () => {
        expect(nobleInteger([1, 2, 3, 4])).toEqual(1);
      });

      it('should return 1 for Sample 2 input [5, 1]', () => {
        expect(nobleInteger([5, 1])).toEqual(1);
      });

      it('should return -1 for Extreme input []', () => {
        expect(nobleInteger([])).toEqual(-1);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        nobleInteger(generateArray(100));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        nobleInteger(generateArray(10e3));
      });

      it('should run for Large 2 input of 50e3 items', () => {
        nobleInteger(generateArray(50e3));
      });

      it('should run for Large 3 input of 100e3 items', () => {
        nobleInteger(generateArray(100e3));
      });
    });
  });
});
