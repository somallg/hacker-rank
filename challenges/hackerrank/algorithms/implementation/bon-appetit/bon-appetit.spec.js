/**
 * Test specs for bon-appetit problem
 * @url https://www.hackerrank.com/challenges/bon-appetit/problem
 */

import { solveBonAppetit } from './bon-appetit';

describe('Bon Appetit', () => {
  describe('solveBonAppetit', () => {
    it('should return 5', () => {
      expect(solveBonAppetit(4, 1, [3, 10, 2, 9], 12)).toEqual('5');
    });
    it('should return Bon Appetit', () => {
      expect(solveBonAppetit(4, 1, [3, 10, 2, 9], 7)).toEqual('Bon Appetit');
    });
  });
});
