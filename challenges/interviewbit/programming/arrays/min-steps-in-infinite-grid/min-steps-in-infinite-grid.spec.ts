/**
 * Test specs for min-steps-in-infinite-grid problem
 * Interviewbit - MinStepsInInfiniteGrid
 */

import { generateArray } from '@challenges/util';

import { minStepsInInfiniteGrid } from './min-steps-in-infinite-grid';

describe('Interviewbit - MinStepsInInfiniteGrid', () => {
  describe('minStepsInInfiniteGrid', () => {
    describe('Example tests', () => {
      it('should return 3 for Example 1 input []', () => {
        expect(minStepsInInfiniteGrid([0, 1, 1], [0, 1, 2])).toEqual(2);
      });
    });

    describe('Correctness tests', () => {
      it('should return 3 for Sample 1 input [1, 2, 3, 4]', () => {
        expect(minStepsInInfiniteGrid([1, 2, 3, 4], [1, 2, 3, 4])).toEqual(3);
      });

      it('should return 3 for Sample 2 input [4, 3, 2, 1]', () => {
        expect(minStepsInInfiniteGrid([4, 3, 2, 1], [4, 3, 2, 1])).toEqual(3);
      });

      it('should return 0 for Extreme input []', () => {
        expect(minStepsInInfiniteGrid([], [])).toEqual(0);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        minStepsInInfiniteGrid(generateArray(100), generateArray(100));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        minStepsInInfiniteGrid(generateArray(10e3), generateArray(10e3));
      });
    });
  });
});
