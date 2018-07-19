/**
 * Test specs for spiral-order-matrix-ii problem
 * Interviewbit - SpiralOrderMatrixIi
 */

import { spiralOrderMatrixIi } from './spiral-order-matrix-ii';

describe('Interviewbit - SpiralOrderMatrixIi', () => {
  describe('spiralOrderMatrixIi', () => {
    describe('Example tests', () => {
      it('should return for Example 1 input 3', () => {
        expect(spiralOrderMatrixIi(3)).toEqual([
          [1, 2, 3],
          [8, 9, 4],
          [7, 6, 5]
        ]);
      });
    });

    describe('Correctness tests', () => {
      it('should return for Sample 1 input 1', () => {
        expect(spiralOrderMatrixIi(1)).toEqual([[1]]);
      });

      it('should return for Sample 2 input 4', () => {
        expect(spiralOrderMatrixIi(4)).toEqual([
          [1, 2, 3, 4],
          [12, 13, 14, 5],
          [11, 16, 15, 6],
          [10, 9, 8, 7]
        ]);
      });

      it('should return for Extreme input 0', () => {
        expect(spiralOrderMatrixIi(0)).toEqual([[]]);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of size 100', () => {
        spiralOrderMatrixIi(100);
      });

      it('should run for Large 1 input of size 1e2', () => {
        spiralOrderMatrixIi(1e2);
      });
    });
  });
});
