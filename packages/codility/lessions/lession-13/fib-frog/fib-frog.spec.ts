/**
 * Test specs for fib-frog problem
 * Codility - FibFrog
 */

import { generateArray } from '@challenges/util';

import { solution } from './fib-frog';

describe('Codility - FibFrog', () => {
  describe('solution', () => {
    describe('Example tests', () => {
      it('should return 3 for Example 1 input []', () => {
        expect(solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0])).toEqual(3);
      });
    });

    describe('Correctness tests', () => {
      it('should return 1 for Sample 1 input [0, 0, 0, 0]', () => {
        expect(solution([0, 0, 0, 0])).toEqual(1);
      });

      it('should return -1 for Sample 2 input [0, 0, 0]', () => {
        expect(solution([0, 0, 0])).toEqual(-1);
      });

      it('should return 3 for Sample 3 input [0, 0, 1, 0, 0, 1]', () => {
        expect(solution([0, 0, 1, 0, 0, 1])).toEqual(3);
      });

      it('should return -1 for Extreme 1 input []', () => {
        expect(solution([])).toEqual(1);
      });

      it('should return 1 for Extreme 1 input [1]', () => {
        expect(solution([1])).toEqual(1);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        solution(generateArray(100, 2));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        solution(generateArray(10e3, 2));
      });

      it('should run for Large 2 input of 50e3 items', () => {
        solution(generateArray(50e3, 2));
      });

      it('should run for Large 3 input of 100e3 items', () => {
        solution(generateArray(100e3, 2));
      });
    });
  });
});
