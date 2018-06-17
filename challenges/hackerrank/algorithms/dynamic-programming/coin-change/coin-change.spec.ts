/**
 * Test specs for coin-change problem
 * HackerRank - CoinChange
 */

import { generateArray } from '@challenges/util';

import { solveCoinChange } from './coin-change';

describe('HackerRank - CoinChange', () => {
  describe('solveCoinChange', () => {
    describe('Example tests', () => {
      it('should return 4 for Example 1 input 4 [1, 2, 3]', () => {
        expect(solveCoinChange(4, [1, 2, 3])).toEqual(4);
      });

      it('should return 5 for Example 2 input 10 [2, 5, 3, 6]', () => {
        expect(solveCoinChange(10, [2, 5, 3, 6])).toEqual(5);
      });
    });

    describe('Correctness tests', () => {
      it('should return 5 for Sample 1 input 4 [1, 2, 3, 4]', () => {
        expect(solveCoinChange(4, [1, 2, 3, 4])).toEqual(5);
      });

      it('should return 0 for Extreme input 1 [2]', () => {
        expect(solveCoinChange(1, [2])).toEqual(0);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        solveCoinChange(100, generateArray(100));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        solveCoinChange(1000, generateArray(10e3));
      });
    });
  });
});
