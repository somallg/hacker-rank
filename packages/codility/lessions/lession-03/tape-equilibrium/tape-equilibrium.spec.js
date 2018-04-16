/**
 * Test specs for tape-equilibrium problem
 * @url https://www.hackerrank.com/challenges/tape-equilibrium/problem
 */

import { solveTapeEquilibrium } from './tape-equilibrium';

describe('TapeEquilibrium', () => {
  describe('solveTapeEquilibrium', () => {
    it('should return 0 when input ', () => {
      expect(solveTapeEquilibrium([1, 1])).toEqual(0);
    });

    it('should return 1 when input ', () => {
      expect(solveTapeEquilibrium([1, 2])).toEqual(1);
    });

    it('should return when input ', () => {
      expect(solveTapeEquilibrium([3, 1, 2, 4, 3])).toEqual(1);
    });
  });
});
