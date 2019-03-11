/**
 * Test specs for pascal-triangle problem
 * Interviewbit - PascalTriangle
 */

import { pascalTriangle } from './pascal-triangle';

describe('Interviewbit - PascalTriangle', () => {
  describe('pascalTriangle', () => {
    describe('Example tests', () => {
      it('should return for Example 1 input 5', () => {
        expect(pascalTriangle(5)).toEqual([
          [1],
          [1, 1],
          [1, 2, 1],
          [1, 3, 3, 1],
          [1, 4, 6, 4, 1]
        ]);
      });
    });

    describe('Correctness tests', () => {
      it('should return for Sample 1 input 4', () => {
        expect(pascalTriangle(4)).toEqual([
          [1],
          [1, 1],
          [1, 2, 1],
          [1, 3, 3, 1]
        ]);
      });

      it('should return for Extreme input 0', () => {
        expect(pascalTriangle(0)).toEqual([]);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        pascalTriangle(100);
      });

      it('should run for Large 1 input of 1e3 items', () => {
        pascalTriangle(1e3);
      });
    });
  });
});
