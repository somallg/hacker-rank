/**
 * Test specs for utopian-tree problem
 * @url https://www.hackerrank.com/challenges/utopian-tree/problem
 */

import { solveUtopianTree } from './utopian-tree';

describe('UtopianTree', () => {
  describe('solveUtopianTree', () => {
    it('should return 1 when input 0', () => {
      expect(solveUtopianTree(0)).toEqual(1);
    });

    it('should return 2 when input 1', () => {
      expect(solveUtopianTree(1)).toEqual(2);
    });

    it('should return 7 when input 4', () => {
      expect(solveUtopianTree(4)).toEqual(7);
    });
  });
});
