/**
 * Test specs for fibonacci problem
 * Codility - Fibonacci
 */

import { fibonacci } from './fibonacci';

describe('Codility - Fibonacci', () => {
  describe('fibonacci', () => {
    describe('Example tests', () => {
      it('should return for Example 1 input 10', () => {
        expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
      });
    });

    describe('Correctness tests', () => {
      it('should return for Sample 1 input 1', () => {
        expect(fibonacci(1)).toEqual([1, 1]);
      });

      it('should return for Sample 2 input 2', () => {
        expect(fibonacci(2)).toEqual([1, 1, 2]);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        fibonacci(100);
      });

      it('should run for Large 1 input of 10e3 items', () => {
        fibonacci(10e3);
      });

      it('should run for Large 2 input of 50e3 items', () => {
        fibonacci(50e3);
      });
    });
  });
});
