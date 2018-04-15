/**
 * Test specs for perm-check problem
 * @url https://www.hackerrank.com/challenges/perm-check/problem
 */

var solvePermCheck = require('./perm-check');

describe('PermCheck', () => {
  describe('solvePermCheck', () => {
    it('shoudl return 1', () => {
      expect(solvePermCheck([1])).toEqual(1);
    });

    it('shoudl return 0', () => {
      expect(solvePermCheck([2])).toEqual(0);
    });

    it('should return 0 when input ', () => {
      expect(solvePermCheck([4, 1, 3])).toEqual(0);
    });

    it('should return 1 when input ', () => {
      expect(solvePermCheck([4, 1, 3, 2])).toEqual(1);
    });
  });
});
