/**
 * Test specs for abs-distinct problem
 * Codility - AbsDistinct
 */

import { generateArray } from '@challenges/util';

import { solution } from './abs-distinct';

describe('Codility - AbsDistinct', () => {
  describe('solution', () => {
    describe('Example tests', () => {
      it('should return 5 for Example 1 input [-5, -3, -1, 0, 3, 6]', () => {
        expect(solution([-5, -3, -1, 0, 3, 6])).toEqual(5);
      });
    });

    describe('Correctness tests', () => {
      it('should return 4 for Sample 1 input [-2, -1, 1, 2, 3, 4]', () => {
        expect(solution([-2, -1, 1, 2, 3, 4])).toEqual(4);
      });

      it('should return 1 for Extreme 1 input [1]', () => {
        expect(solution([1])).toEqual(1);
      });

      it('should return 1 for Extreme 2 input [-4, -4, -4, -4]', () => {
        expect(solution([-4, -4, -4, -4])).toEqual(1);
      });

      it('should return 2 for All Negative input [-2, -2, -1]', () => {
        expect(solution([-2, -2, -1])).toEqual(2);
      });

      it('should return 2 for All Positive input [1, 2]', () => {
        expect(solution([1, 2])).toEqual(2);
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
