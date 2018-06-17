/**
 * Test specs for circular-array-rotation problem
 * @url https://www.hackerrank.com/challenges/circular-array-rotation/problem
 */

var { solveCircularArrayRotation } = require('./circular-array-rotation');

describe('CircularArrayRotation', () => {
  describe('solveCircularArrayRotation', () => {
    it('should return [1] when input [1, 2, 3], 0, [0]', () => {
      expect(solveCircularArrayRotation([1, 2, 3], 0, [0])).toEqual([1]);
    });

    it('should return [2, 3, 1] when input [1, 2, 3], 2, [1]', () => {
      expect(solveCircularArrayRotation([1, 2, 3], 2, [1])).toEqual([3]);
    });

    it('should return [2, 3, 1] when input [1, 2, 3], 2, [0, 1, 2]', () => {
      expect(solveCircularArrayRotation([1, 2, 3], 2, [0, 1, 2])).toEqual([
        2,
        3,
        1
      ]);
    });
  });
});
