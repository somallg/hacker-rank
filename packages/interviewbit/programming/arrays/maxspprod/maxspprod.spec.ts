/**
 * Test specs for maxspprod problem
 * Interviewbit - Maxspprod
 */

import { generateArray } from '@challenges/util';

import { maxspprod } from './maxspprod';

describe('Interviewbit - Maxspprod', () => {
  describe('maxspprod', () => {
    describe('Example tests', () => {
      it('should return 80 for Example 1 input [ 5, 9, 6, 8, 6, 4, 6, 9, 5, 4, 9 ]', () => {
        expect(maxspprod([5, 9, 6, 8, 6, 4, 6, 9, 5, 4, 9])).toEqual(80);
      });
    });

    describe('Correctness tests', () => {
      it('should return 0 for Sample 1 input [1, 2, 3, 4]', () => {
        expect(maxspprod([1, 2, 3, 4])).toEqual(0);
      });

      it('should return 0 for Sample 2 input [4, 3, 2, 1]', () => {
        expect(maxspprod([4, 3, 2, 1])).toEqual(0);
      });

      it('should return 0 for Extreme input []', () => {
        expect(maxspprod([])).toEqual(0);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        maxspprod(generateArray(100));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        maxspprod(generateArray(10e3));
      });

      it('should run for Large 2 input of 50e3 items', () => {
        maxspprod(generateArray(50e3));
      });

      it('should run for Large 3 input of 100e3 items', () => {
        maxspprod(generateArray(100e3));
      });
    });
  });
});
