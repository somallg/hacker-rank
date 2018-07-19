/**
 * Test specs for min-abs-sum problem
 * Codility - MinAbsSum
 */

import { generateArray } from '@challenges/util';

import { solution } from './min-abs-sum';

xdescribe('Codility - MinAbsSum', () => {
  describe('solution', () => {
    describe('Example tests', () => {
      it('should return 0 for Example 1 input [1, 5, 2, -2]', () => {
        expect(solution([1, 5, 2, -2])).toEqual(0);
      });

      it('should return 1 for Example 2 input [5, 2, -2, 10]', () => {
        expect(solution([5, 2, -2, 10])).toEqual(1);
      });

      it('shoult return 1 for Example 3 input [1, 3, 5, 7, 13]', () => {
        expect(solution([1, 3, 5, 7, 13])).toEqual(1);
      });
    });

    describe('Correctness tests', () => {
      it('should return 0 for Sample 1 input [1, 2, 3, 4]', () => {
        expect(solution([1, 2, 3, 4])).toEqual(0);
      });

      it('should return 0 for Sample 2 input [4, 3, 2, 1]', () => {
        expect(solution([4, 3, 2, 1])).toEqual(0);
      });

      it('should return 0 for Extreme input []', () => {
        expect(solution([])).toEqual(0);
      });

      it('should return 0 for All Negative input [-4, -3, -2, -1]', () => {
        expect(solution([-4, -3, -2, -1])).toEqual(0);
      });
    });

    xdescribe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        solution(generateArray(100));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        solution(generateArray(10e3));
      });

      it('should run for Large 2 input of 20e3 items', () => {
        solution(generateArray(20e3));
      });
    });
  });
});
