/**
 * Test specs for gray-code problem
 * Interviewbit - GrayCode
 */

import { grayCode } from './gray-code';

describe('Interviewbit - GrayCode', () => {
  describe('grayCode', () => {
    describe('Example tests', () => {
      it('should return  for Example 1 input 2', () => {
        expect(grayCode(2)).toEqual([0, 1, 3, 2]);
      });
    });

    describe('Correctness tests', () => {
      it('should return for Sample 1 input 3', () => {
        expect(grayCode(3)).toEqual([0, 1, 3, 2, 6, 7, 5, 4]);
      });

      it('should return for Extreme input 0', () => {
        expect(grayCode(0)).toEqual([]);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 10 items', () => {
        grayCode(10);
      });
    });
  });
});
