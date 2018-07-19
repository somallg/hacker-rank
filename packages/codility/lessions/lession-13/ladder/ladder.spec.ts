/**
 * Test specs for ladder problem
 * Codility - Ladder
 */

import { generateArray } from '@challenges/util';

import { solution } from './ladder';

describe('Codility - Ladder', () => {
  describe('solution', () => {
    describe('Example tests', () => {
      it('should return [5, 1, 8, 0, 1] for Example 1 input [4, 4, 5, 5, 1] [3, 2, 4, 3, 1]', () => {
        expect(solution([4, 4, 5, 5, 1], [3, 2, 4, 3, 1])).toEqual([
          5,
          1,
          8,
          0,
          1
        ]);
      });
    });

    describe('Correctness tests', () => {
      it('should return [1, 2, 3, 5] for Sample 1 input [1, 2, 3, 4] [1, 2, 3, 4]', () => {
        expect(solution([1, 2, 3, 4], [1, 2, 3, 4])).toEqual([1, 2, 3, 5]);
      });

      it('should return [5, 3, 2, 1] for Sample 2 input [4, 3, 2, 1] [4, 3, 2, 1]', () => {
        expect(solution([4, 3, 2, 1], [4, 3, 2, 1])).toEqual([5, 3, 2, 1]);
      });

      it('should return [1, 3, 2, 1] for Sample 3 input [4, 3, 2, 1] [1, 2, 3, 4]', () => {
        expect(solution([4, 3, 2, 1], [1, 2, 3, 4])).toEqual([1, 3, 2, 1]);
      });

      it('should return [1] for Extreme 1 input [1] [1]', () => {
        expect(solution([1], [1])).toEqual([1]);
      });

      it('should return [890883426] for Extreme 2 input [50e3] [30]', () => {
        expect(solution([50e3], [30])).toEqual([890883426]);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        solution(generateArray(100), generateArray(100, 30));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        solution(generateArray(10e3), generateArray(10e3, 30));
      });

      it('should run for Large 2 input of 50e3 items', () => {
        solution(generateArray(50e3), generateArray(50e3, 30));
      });
    });
  });
});
