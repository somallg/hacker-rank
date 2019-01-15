/**
 * Test specs for utopian-tree problem
 * @url https://www.hackerrank.com/challenges/utopian-tree/problem
 */

import {
  solveUtopianTree,
  solveUtopianTreeLazy,
  solveUtopianTreeTail
} from './utopian-tree';

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

  describe('solveUtopianTreeTail', () => {
    it('should return 1 when input 0', () => {
      expect(solveUtopianTreeTail(0)).toEqual(1);
    });

    it('should return 2 when input 1', () => {
      expect(solveUtopianTreeTail(1)).toEqual(2);
    });

    it('should return 7 when input 4', () => {
      expect(solveUtopianTreeTail(4)).toEqual(10);
    });
  });

  describe('solveUtopianTreeLazy', () => {
    it('should return 1 when input 0', () => {
      expect(solveUtopianTreeLazy(0)).toEqual(1);
    });

    it('should return 2 when input 1', () => {
      expect(solveUtopianTreeLazy(1)).toEqual(2);
    });

    it('should return 7 when input 4', () => {
      expect(solveUtopianTreeLazy(4)).toEqual(10);
    });
  });
});
