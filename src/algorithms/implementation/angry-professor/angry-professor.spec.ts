/**
 * Test specs for angry-professor problem
 * @url https://www.hackerrank.com/challenges/angry-professor/problem
 */

import { solveAngryProfessor } from './angry-professor';

describe('AngryProfessor', () => {
  describe('solveAngryProfessor', () => {
    it('should return YES when input ', () => {
      expect(solveAngryProfessor(3, [-1, -3, 4, 2])).toEqual('YES');
    });

    it('should return NO input ', () => {
      expect(solveAngryProfessor(2, [0, -1, 2, 1])).toEqual('NO');
    });

    it('should return NO input ', () => {
      expect(solveAngryProfessor(4, [0, 0, 0, 0])).toEqual('NO');
    });
  });
});
