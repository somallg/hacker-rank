/**
 * Test specs for n-queens problem
 * Hackerearth - NQueens
 */

import { generateBoard, solveNQueens } from './n-queens';

describe('Hackerearth - NQueens', () => {
  describe('solveNQueens', () => {
    describe('Example tests', () => {
      it('should return true for Example 1 input 4', () => {
        expect(solveNQueens(generateBoard(4), 4)).toEqual(`0 1 0 0
0 0 0 1
1 0 0 0
0 0 1 0`);
      });

      it('should return true for Example 2 input 8', () => {
        expect(solveNQueens(generateBoard(8), 8)).toEqual(`1 0 0 0 0 0 0 0
0 0 0 0 1 0 0 0
0 0 0 0 0 0 0 1
0 0 0 0 0 1 0 0
0 0 1 0 0 0 0 0
0 0 0 0 0 0 1 0
0 1 0 0 0 0 0 0
0 0 0 1 0 0 0 0`);
      });

      it('should return true for Example 3 input 16', () => {
        expect(solveNQueens(generateBoard(16), 16))
          .toEqual(`1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0
0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0
0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0
0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0
0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0
0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0
0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0`);
      });
    });
  });
});
