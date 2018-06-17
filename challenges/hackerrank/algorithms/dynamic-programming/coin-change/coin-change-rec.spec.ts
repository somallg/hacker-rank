/**
 * Test specs for coin-change problem
 * HackerRank - CoinChange
 */

import { generateArray } from '@challenges/util';

import { solveCoinChangeRec } from './coin-change-rec';

describe('HackerRank - CoinChange', () => {
  describe('solveCoinChangeRec', () => {
    describe('Example tests', () => {
      it('should return 4 for Example 1 input 4 [1, 2, 3]', () => {
        expect(solveCoinChangeRec(4, [1, 2, 3])).toEqual(4);
      });

      it('should return 5 for Example 2 input 10 [2, 5, 3, 6]', () => {
        expect(solveCoinChangeRec(10, [2, 5, 3, 6])).toEqual(5);
      });
    });

    describe('Correctness tests', () => {
      it('should return 5 for Sample 1 input 4 [1, 2, 3, 4]', () => {
        expect(solveCoinChangeRec(4, [1, 2, 3, 4])).toEqual(5);
      });

      it('should return 0 for Extreme input 1 [2]', () => {
        expect(solveCoinChangeRec(1, [2])).toEqual(0);
      });
    });
  });
});
