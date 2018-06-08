/**
 * Test specs for intelligent-girl problem
 * HackerEarth - IntelligentGirl
 */

import { generateArray } from '@challenges/util';

import { solveIntelligentGirl } from './intelligent-girl';

describe('HackerEarth - IntelligentGirl', () => {
  describe('solveIntelligentGirl', () => {
    describe('Example tests', () => {
      it('should return [7, 7, 7, 6, 5, 5, 4, 4, 3, 2, 1, 1] for Example 1 input [5, 7, 4, 6, 7, 4, 5, 4, 6, 4, 7, 6]', () => {
        expect(
          solveIntelligentGirl([5, 7, 4, 6, 7, 4, 5, 4, 6, 4, 7, 6])
        ).toEqual([7, 7, 7, 6, 5, 5, 4, 4, 3, 2, 1, 1]);
      });
    });

    describe('Correctness tests', () => {
      it('should return [2, 2, 1, 1] for Sample 1 input [1, 2, 3, 4]', () => {
        expect(solveIntelligentGirl([1, 2, 3, 4])).toEqual([2, 2, 1, 1]);
      });

      it('should return [1] for Extreme input [2]', () => {
        expect(solveIntelligentGirl([2])).toEqual([1]);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        solveIntelligentGirl(generateArray(100, 10));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        solveIntelligentGirl(generateArray(10e3, 10));
      });
    });
  });
});
