/**
 * Test specs for test problem
 * Spoj - Test
 */

import { generateArray } from '@challenges/util';

import { solveTest } from './test';

xdescribe('Spoj - Test', () => {
  describe('solveTest', () => {
    describe('Example tests', () => {
      it('should return 42 for Example 1 input []', () => {
        expect(solveTest([])).toEqual(42);
      });

      it('should return 42 for Example 2 input []', () => {
        expect(solveTest([])).toEqual(42);
      });
    });

    describe('Correctness tests', () => {
      it('should return 42 for Sample 1 input [1, 2, 3, 4]', () => {
        expect(solveTest([1, 2, 3, 4])).toEqual(42);
      });

      it('should return 42 for Sample 2 input [4, 3, 2, 1]', () => {
        expect(solveTest([4, 3, 2, 1])).toEqual(42);
      });

      it('should return 42 for Sample 3 input [4, 3, 2, 1]', () => {
        expect(solveTest([4, 3, 2, 1])).toEqual(42);
      });

      it('should return 42 for Extreme input []', () => {
        expect(solveTest([])).toEqual(42);
      });

      it('should return 42 for All Negative input [2, 1, 0]', () => {
        expect(solveTest([2, 1])).toEqual(42);
      });

      it('should return 42 for All Positive input [2, 1, 0]', () => {
        expect(solveTest([2, 1])).toEqual(42);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        solveTest(generateArray(100));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        solveTest(generateArray(10e3));
      });

      it('should run for Large 2 input of 50e3 items', () => {
        solveTest(generateArray(50e3));
      });

      it('should run for Large 3 input of 100e3 items', () => {
        solveTest(generateArray(100e3));
      });
    });
  });
});
