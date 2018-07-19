/**
 * Test specs for count-triangles problem
 * Codility - CountTriangles
 */

import { generateArray } from '@challenges/util';

import { solution } from './count-triangles';

describe('Codility - CountTriangles', () => {
  describe('solution', () => {
    describe('Example tests', () => {
      it('should return _ for Example 1 input []', () => {
        expect(solution([10, 2, 5, 1, 8, 12])).toEqual(4);
      });
    });

    describe('Correctness tests', () => {
      it('should return 1 for Sample 1 input [1, 2, 3, 4]', () => {
        expect(solution([1, 2, 3, 4])).toEqual(1);
      });

      it('should return 1 for Sample 2 input [4, 3, 2, 1]', () => {
        expect(solution([4, 3, 2, 1])).toEqual(1);
      });

      it('should return 0 for Extreme input []', () => {
        expect(solution([])).toEqual(0);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        solution(generateArray(100, 1e9));
      });

      it('should run for Medium 2 input of 1e3 items', () => {
        solution(generateArray(1e3, 1e9));
      });
    });
  });
});
