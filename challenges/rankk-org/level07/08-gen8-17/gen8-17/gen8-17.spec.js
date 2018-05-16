/**
 * Test specs for gen8-17 problem
 * @url https://www.rankk.org/challenges/gen8:17.py
 */

import { solveGen817 } from './gen8-17';

describe('Gen817', () => {
  describe('solveGen817', () => {
    it('should return when input ', () => {
      expect(solveGen817()).toEqual(1);
    });

    it('should return when input ', () => {
      expect(solveGen817()).toEqual(2);
    });
  });
});
