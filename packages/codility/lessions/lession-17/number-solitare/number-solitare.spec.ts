/**
 * Test specs for number-solitare problem
 * Codility - NumberSolitare
 */

import { generateArray } from '@challenges/util';

import { solution } from './number-solitare';

describe('Codility - NumberSolitare', () => {
  describe('solution', () => {
    describe('Example tests', () => {
      it('should return 8 for Example 1 input [1, -2, 0, 9, -1, -2]', () => {
        expect(solution([1, -2, 0, 9, -1, -2])).toEqual(8);
      });

      it('should return -6 for Example 1 input [-1, -2, -3, -9, -1, -2, -3, -4, -5, -6, -7]', () => {
        expect(
          solution([-1, -2, -3, -4, -3, -8, -5, -2, -3, -4, -5, -6, -1])
        ).toEqual(-6);
      });
    });

    describe('Correctness tests', () => {
      it('should return 10 for Sample 1 input [1, 2, 3, 4]', () => {
        expect(solution([1, 2, 3, 4])).toEqual(10);
      });

      it('should return 10 for Sample 2 input [4, 3, 2, 1]', () => {
        expect(solution([4, 3, 2, 1])).toEqual(10);
      });

      it('should return 3 for Extreme input [1, 2]', () => {
        expect(solution([1, 2])).toEqual(3);
      });

      it('should return -3 for Extreme input [-1, -2]', () => {
        expect(solution([-1, -2])).toEqual(-3);
      });

      it('should return -2 for All Negative input [-2, -1, 0]', () => {
        expect(solution([-2, -1, 0])).toEqual(-2);
      });

      it('should return 3 for All Positive input [2, 1, 0]', () => {
        expect(solution([2, 1])).toEqual(3);
      });
    });

    xdescribe('Performance tests', () => {
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
