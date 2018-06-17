/**
 * Test specs for cats-and-a-mouse problem
 * @url https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
 */

import { solveCatsAndAMouse } from './cats-and-a-mouse';

describe('CatsAndAMouse', () => {
  describe('solveCatsAndAMouse', () => {
    it('should return Cat B when input 1 2 3', () => {
      expect(solveCatsAndAMouse(1, 2, 3)).toEqual('Cat B');
    });

    it('should return Mouse C input 1 3 2', () => {
      expect(solveCatsAndAMouse(1, 3, 2)).toEqual('Mouse C');
    });
  });
});
