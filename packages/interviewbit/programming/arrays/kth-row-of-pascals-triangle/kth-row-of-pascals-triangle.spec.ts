/**
 * Test specs for kth-row-of-pascals-triangle problem
 * Interviewbit - KthRowOfPascalsTriangle
 */

import { kthRowOfPascalsTriangle } from './kth-row-of-pascals-triangle';

describe('Interviewbit - KthRowOfPascalsTriangle', () => {
  describe('kthRowOfPascalsTriangle', () => {
    describe('Example tests', () => {
      it('should return for Example 1 input 3', () => {
        expect(kthRowOfPascalsTriangle(3)).toEqual([1, 3, 3, 1]);
      });

      it('should return for Example 2 input 4', () => {
        expect(kthRowOfPascalsTriangle(4)).toEqual([1, 4, 6, 4, 1]);
      });
    });

    describe('Correctness tests', () => {
      it('should return for Sample 1 input 1', () => {
        expect(kthRowOfPascalsTriangle(1)).toEqual([1, 1]);
      });

      it('should return for Extreme input 0', () => {
        expect(kthRowOfPascalsTriangle(0)).toEqual([1]);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        kthRowOfPascalsTriangle(100);
      });

      it('should run for Large 1 input of 10e3 items', () => {
        kthRowOfPascalsTriangle(10e3);
      });
    });
  });
});
