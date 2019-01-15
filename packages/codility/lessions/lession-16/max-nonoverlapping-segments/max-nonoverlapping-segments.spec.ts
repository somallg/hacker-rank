/**
 * Test specs for max-nonoverlapping-segments problem
 * Codility - MaxNonoverlappingSegments
 */

import { generateArray } from '@challenges/util';

import { solution } from './max-nonoverlapping-segments';

describe('Codility - MaxNonoverlappingSegments', () => {
  describe('solution', () => {
    describe('Example tests', () => {
      it('should return 3 for Example 1 input []', () => {
        expect(solution([1, 3, 7, 9, 9], [5, 6, 8, 9, 10])).toEqual(3);
      });
    });

    describe('Correctness tests', () => {
      it('should return 4 for Sample 1 input [1, 2, 3, 4] [2, 3, 4, 5]', () => {
        expect(solution([1, 3, 4, 5], [2, 3, 4, 5])).toEqual(4);
      });

      it('should return 0 for Extreme input []', () => {
        expect(solution([], [])).toEqual(0);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        solution(
          generateArray(100),
          generateArray(100).sort((a: number, b: number) => a - b)
        );
      });

      it('should run for Large 1 input of 10e3 items', () => {
        solution(
          generateArray(10e3),
          generateArray(10e3).sort((a: number, b: number) => a - b)
        );
      });

      it('should run for Large 2 input of 30e3 items', () => {
        solution(
          generateArray(30e3),
          generateArray(30e3).sort((a: number, b: number) => a - b)
        );
      });
    });
  });
});
