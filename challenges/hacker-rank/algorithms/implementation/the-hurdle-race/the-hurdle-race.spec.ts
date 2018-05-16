/**
 * Test specs for the-hurdle-race problem
 * @url https://www.hackerrank.com/challenges/the-hurdle-race/problem
 */

import { solveTheHurdleRace } from './the-hurdle-race';

describe('TheHurdleRace', () => {
  describe('solveTheHurdleRace', () => {
    it('should return 2 when input ', () => {
      expect(solveTheHurdleRace(4, [1, 6, 3, 5, 2])).toEqual(2);
    });

    it('should return 5 when input ', () => {
      expect(solveTheHurdleRace(7, [2, 5, 4, 4, 2])).toEqual(0);
    });
  });
});
