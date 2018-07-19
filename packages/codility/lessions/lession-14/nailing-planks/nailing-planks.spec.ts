/**
 * Test specs for nailing-planks problem
 * Codility - NailingPlanks
 */

import { generateArray } from '@challenges/util';

import { solution } from './nailing-planks';

describe('Codility - NailingPlanks', () => {
  describe('solution', () => {
    describe('Example tests', () => {
      it('should return 4 for Example 1 input [1, 4, 5, 8] [4, 5, 9, 10] [4, 6, 7, 10, 2]', () => {
        expect(
          solution(
            [1, 1, 1, 4, 5, 8],
            [2, 2, 4, 5, 9, 10],
            [4, 4, 4, 6, 7, 10, 2, 4, 4, 4, 2]
          )
        ).toEqual(7);
      });

      it('should return 3 for Example 2 input []', () => {
        expect(solution([1, 2], [2, 3], [1, 1, 2])).toEqual(3);
      });
    });

    describe('Correctness tests', () => {
      it('should return 4 for Sample 1 input [1, 2, 3, 4]', () => {
        expect(solution([1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4])).toEqual(4);
      });

      it('should return 4 for Sample 2 input [4, 3, 2, 1]', () => {
        expect(solution([4, 3, 2, 1], [4, 3, 2, 1], [1, 2, 3, 4])).toEqual(4);
      });

      it('should return 4 for Sample 3 input [4, 3, 2, 1]', () => {
        expect(solution([4, 3, 2, 1], [4, 3, 2, 1], [4, 3, 2, 1])).toEqual(4);
      });

      it('should return 1 for Extreme input [1] [1] [1]', () => {
        expect(solution([1], [1], [1])).toEqual(1);
      });

      it('should return -1 for Extreme input [2] [2] [1]', () => {
        expect(solution([2], [2], [1])).toEqual(-1);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        solution(generateArray(100), generateArray(100), generateArray(100));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        solution(generateArray(10e3), generateArray(10e3), generateArray(10e3));
      });

      it('should run for Large 2 input of 30e3 items', () => {
        solution(generateArray(30e3), generateArray(30e3), generateArray(30e3));
      });
    });
  });
});
