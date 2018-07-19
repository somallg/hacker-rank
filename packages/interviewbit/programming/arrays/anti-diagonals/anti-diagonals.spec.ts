/**
 * Test specs for anti-diagonals problem
 * Interviewbit - AntiDiagonals
 */

import { generateMatrix } from '@challenges/util';
import { antiDiagonals } from './anti-diagonals';

describe('Interviewbit - AntiDiagonals', () => {
  describe('antiDiagonals', () => {
    describe('Example tests', () => {
      it('should return for Example 1 input', () => {
        expect(antiDiagonals([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([
          [1],
          [2, 4],
          [3, 5, 7],
          [6, 8],
          [9]
        ]);
      });
    });

    describe('Correctness tests', () => {
      it('should return for Sample 1 input', () => {
        expect(antiDiagonals([[1, 2], [3, 4]])).toEqual([[1], [2, 3], [4]]);
      });

      it('should return for Extreme input [[1]]', () => {
        expect(antiDiagonals([[1]])).toEqual([[1]]);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        antiDiagonals(generateMatrix(100));
      });

      it('should run for Large 1 input of 1e3 items', () => {
        antiDiagonals(generateMatrix(1e3));
      });
    });
  });
});
