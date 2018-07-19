/**
 * Test specs for count-distinct-slices problem
 * Codility - CountDistinctSlices
 */

import { generateArray } from '@challenges/util';

import { solution } from './count-distinct-slices';

describe('Codility - CountDistinctSlices', () => {
  describe('solution', () => {
    describe('Example tests', () => {
      it('should return 9 for Example 1 input [3, 4, 5, 5, 2]', () => {
        expect(solution(100e3, [3, 4, 5, 5, 2])).toEqual(9);
      });
    });

    describe('Correctness tests', () => {
      it('should return 10 for Sample 1 input [1, 2, 3, 4]', () => {
        expect(solution(100e3, [1, 2, 3, 4])).toEqual(10);
      });

      it('should return 12 for Sample 2 input [4, 3, 4, 2, 1]', () => {
        expect(solution(100e3, [4, 3, 4, 2, 1])).toEqual(12);
      });

      it('should return 1 for Extreme input [0]', () => {
        expect(solution(100e3, [0])).toEqual(1);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        solution(100e3, generateArray(100));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        solution(100e3, generateArray(10e3));
      });

      it('should run for Large 2 input of 50e3 items', () => {
        solution(100e3, generateArray(50e3));
      });

      it('should run for Large 3 input of 100e3 items', () => {
        solution(100e3, generateArray(100e3));
      });
    });
  });
});
