/**
 * Test specs for n-queens problem
 * Interviewbit - NQueens
 */

import { nQueens } from './n-queens';

describe('Hackerearth - NQueens', () => {
  describe('nQueens', () => {
    describe('Example tests', () => {
      it('should return true for Example 1 input 4', () => {
        expect(nQueens(4)).toEqual([
          // prettier-ignore
          ['.Q..',
           '...Q',
           'Q...',
           '..Q.'],
          // prettier-ignore
          ['..Q.',
           'Q...',
           '...Q',
           '.Q..']
        ]);
      });
    });

    describe('Example tests', () => {
      it('should return true for Example 1 input 5', () => {
        expect(nQueens(5)).toEqual([
          ['Q....', '..Q..', '....Q', '.Q...', '...Q.'],
          ['Q....', '...Q.', '.Q...', '....Q', '..Q..'],
          ['.Q...', '...Q.', 'Q....', '..Q..', '....Q'],
          ['.Q...', '....Q', '..Q..', 'Q....', '...Q.'],
          ['..Q..', 'Q....', '...Q.', '.Q...', '....Q'],
          ['..Q..', '....Q', '.Q...', '...Q.', 'Q....'],
          ['...Q.', 'Q....', '..Q..', '....Q', '.Q...'],
          ['...Q.', '.Q...', '....Q', '..Q..', 'Q....'],
          ['....Q', '.Q...', '...Q.', 'Q....', '..Q..'],
          ['....Q', '..Q..', 'Q....', '...Q.', '.Q...']
        ]);
      });

      it('should return for Extreme 1 input 0', () => {
        expect(nQueens(0)).toEqual([[]]);
      });
    });

    describe('Performance tests', () => {
      it('should return for Medium 1 input of size 10', () => {
        nQueens(10);
      });
    });
  });
});
