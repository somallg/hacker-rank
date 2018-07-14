/**
 * Test specs for common-prime-divisors problem
 * Codility - CommonPrimeDivisors
 */

import { generateArray } from '@challenges/util';

import { solution } from './common-prime-divisors';

describe('Codility - CommonPrimeDivisors', () => {
  describe('solution', () => {
    describe('Example tests', () => {
      it('should return 1 for Example 1 input [15, 10, 3] [75, 30, 5]', () => {
        expect(solution([15, 10, 3], [75, 30, 5])).toEqual(1);
      });

      it('should return 1 for Example 2 input [12, 14, 5] [18, 8, 2]', () => {
        expect(solution([12, 14, 5], [18, 8, 2])).toEqual(1);
      });
    });

    describe('Correctness tests', () => {
      it('should return 0 for Sample 1 input [6] [43]', () => {
        expect(solution([6], [43])).toEqual(0);
      });

      it('should return 0 for Sample 2 input [6] [42]', () => {
        expect(solution([6], [42])).toEqual(0);
      });

      it('should return 1 for Sample 3 input [6] [12]', () => {
        expect(solution([6], [12])).toEqual(1);
      });

      it('should return 1 for Sample 4 input [5] [7]', () => {
        expect(solution([7], [5])).toEqual(0);
      });

      it('should return 1 for Extreme 1 input [1] [1]', () => {
        expect(solution([1], [1])).toEqual(1);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        solution(generateArray(100), generateArray(100));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        solution(generateArray(10e3), generateArray(10e3));
      });

      it('should run for Large 2 input of 50e3 items', () => {
        solution(generateArray(50e3), generateArray(50e3));
      });

      it('should run for Large 3 input of 100e3 items', () => {
        solution(generateArray(100e3), generateArray(100e3));
      });
    });
  });
});
