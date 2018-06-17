/**
 * Test specs for candies problem
 * HackerRank - Candies
 */

import { generateArray } from '@challenges/util';

import { solveCandies } from './candies';

describe('HackerRank - Candies', () => {
  describe('solveCandies', () => {
    describe('Example tests', () => {
      it('should return 4 for Example 1 input [1, 2, 2]', () => {
        expect(solveCandies([1, 2, 2])).toEqual(4);
      });

      it('should return 19 for Example 2 input [2, 4, 2, 6, 1, 7, 8, 9, 2, 1]', () => {
        expect(solveCandies([2, 4, 2, 6, 1, 7, 8, 9, 2, 1])).toEqual(19);
      });
    });

    describe('Correctness tests', () => {
      it('should return 10 for Sample 1 input [1, 2, 3, 4]', () => {
        expect(solveCandies([1, 2, 3, 4])).toEqual(10);
      });

      it('should return 10 for Sample 2 input [4, 3, 2, 1]', () => {
        expect(solveCandies([4, 3, 2, 1])).toEqual(10);
      });

      it('should return 1 for Extreme input [1]', () => {
        expect(solveCandies([1])).toEqual(1);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        solveCandies(generateArray(100));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        solveCandies(generateArray(10e3));
      });

      it('should run for Large 2 input of 50e3 items', () => {
        solveCandies(generateArray(50e3));
      });

      it('should run for Large 3 input of 100e3 items', () => {
        solveCandies(generateArray(100e3));
      });
    });
  });
});
