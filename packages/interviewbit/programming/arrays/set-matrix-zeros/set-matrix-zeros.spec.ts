/**
 * Test specs for set-matrix-zeros problem
 * Interviewbit - SetMatrixZeros
 */

import { generateMatrix } from '@challenges/util';

import { setMatrixZeros } from './set-matrix-zeros';

describe('Interviewbit - SetMatrixZeros', () => {
  describe('setMatrixZeros', () => {
    describe('Example tests', () => {
      it('should return for Example 1 input', () => {
        // prettier-ignore
        expect(setMatrixZeros([
          [1, 0, 1],
          [1, 1, 1],
          [1, 1, 1]
        ])).toEqual([
          [0, 0, 0],
          [1, 0, 1],
          [1, 0, 1]
        ]);
      });

      it('should return for Example 2 input', () => {
        // prettier-ignore
        expect(setMatrixZeros([
          [1, 1, 1, 1],
          [1, 1, 1, 1],
          [1, 1, 1, 1],
          [1, 1, 0, 1]
        ])).toEqual([
          [1, 1, 0, 1],
          [1, 1, 0, 1],
          [1, 1, 0, 1],
          [0, 0, 0, 0]
        ]);
      });
    });

    describe('Correctness tests', () => {
      it('should return for Sample 1 input', () => {
        expect(setMatrixZeros([[1, 0], [1, 0]])).toEqual([[0, 0], [0, 0]]);
      });

      it('should return for Extreme 1 input', () => {
        expect(setMatrixZeros([[0]])).toEqual([[0]]);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        setMatrixZeros(generateMatrix(100));
      });

      it('should run for Large 1 input of 1e3 items', () => {
        setMatrixZeros(generateMatrix(1e3));
      });
    });
  });
});
