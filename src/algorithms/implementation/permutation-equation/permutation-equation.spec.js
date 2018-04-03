/**
 * Test specs for permutation-equation problem
 * @url https://www.hackerrank.com/challenges/permutation-equation/problem
 */

var { solvePermutationEquation } = require('./permutation-equation.js');

describe('PermutationEquation', () => {
  describe('solvePermutationEquation', () => {
    it('should return when input ', () => {
      expect(solvePermutationEquation([2, 3, 1])).toEqual([2, 3, 1]);
    });

    it('should return when input ', () => {
      expect(solvePermutationEquation([1])).toEqual([1]);
    });
  });
});
