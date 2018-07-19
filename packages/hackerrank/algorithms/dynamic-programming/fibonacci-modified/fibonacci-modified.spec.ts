/**
 * Test specs for fibonacci-modified problem
 * HackerRank - FibonacciModified
 */

import { solveFibonacciModified } from './fibonacci-modified';

describe('HackerRank - FibonacciModified', () => {
  describe('solveFibonacciModified', () => {
    describe('Example tests', () => {
      it('should return 5 for Example 1 input 0, 1, 5', () => {
        expect(solveFibonacciModified(0, 1, 5)).toEqual('5');
      });

      it('should return 6 for Example 2 input 0, 1, 6', () => {
        expect(solveFibonacciModified(0, 1, 6)).toEqual('27');
      });
    });

    describe('Correctness tests', () => {
      it('should return 5 for Sample 1 input 1, 2, 3', () => {
        expect(solveFibonacciModified(1, 2, 3)).toEqual('5');
      });

      it('should return 4 for Sample 2 input 0, 2, 3', () => {
        expect(solveFibonacciModified(0, 2, 3)).toEqual('4');
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 10', () => {
        solveFibonacciModified(0, 1, 10);
      });

      it('should run for Medium 2 input of 20', () => {
        solveFibonacciModified(0, 1, 20);
      });
    });
  });
});
