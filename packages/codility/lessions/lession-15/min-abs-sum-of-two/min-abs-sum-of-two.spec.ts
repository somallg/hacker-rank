/**
 * Test specs for min-abs-sum-of-two problem
 * Codility - MinAbsSumOfTwo
 */

import { generateArray } from '@challenges/util';

import { solution } from './min-abs-sum-of-two';

describe('Codility - MinAbsSumOfTwo', () => {
  describe('solution', () => {
    describe('Example tests', () => {
      it('should return 1 for Example 1 input [1, 4, -3]', () => {
        expect(solution([1, 4, -3])).toEqual(1);
      });

      it('should return 3 for Example 2 input [-8,  4,  5,-10,  3]', () => {
        expect(solution([-8, 4, 5, -10, 3])).toEqual(3);
      });
    });

    describe('Correctness tests', () => {
      it('should return 1 for Sample 1 input [-5, 1, 2, 3, 4]', () => {
        expect(solution([-5, 1, 2, 3, 4])).toEqual(1);
      });

      it('should return 0 for Extreme 1 input [0]', () => {
        expect(solution([0])).toEqual(0);
      });

      it('should return 8 for Extreme 2 input [4, 4, 4, 4]', () => {
        expect(solution([4, 4, 4, 4])).toEqual(8);
      });

      it('should return 2 for All Negative input [-4, -3, -2, -1]', () => {
        expect(solution([2, 1])).toEqual(2);
      });

      it('should return 2 for All Positive input [4, 3, 2, 1]', () => {
        expect(solution([4, 3, 2, 1])).toEqual(2);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        solution(generateArray(100));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        solution(generateArray(10e3));
      });

      it('should run for Large 2 input of 50e3 items', () => {
        solution(generateArray(50e3));
      });

      it('should run for Large 3 input of 100e3 items', () => {
        solution(generateArray(100e3));
      });
    });
  });
});
