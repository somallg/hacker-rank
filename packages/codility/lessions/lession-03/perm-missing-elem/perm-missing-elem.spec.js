/**
 * Test specs for perm-missing-elem problem
 * @url https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
 */

var { solvePermMissingElem } = require('./perm-missing-elem');

describe('PermMissingElem', () => {
  describe('solvePermMissingElem', () => {
    it('should return 1 when input ', () => {
      expect(solvePermMissingElem([])).toEqual(1);
    });

    it('should return 2 when input ', () => {
      expect(solvePermMissingElem([1])).toEqual(2);
    });

    it('should return 4 when input ', () => {
      expect(solvePermMissingElem([2, 3, 1, 5])).toEqual(4);
    });
  });
});
