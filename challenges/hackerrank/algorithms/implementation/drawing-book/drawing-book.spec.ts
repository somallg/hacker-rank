/**
 * Test specs for drawing-book problem
 * @url https://www.hackerrank.com/challenges/drawing-book/problem
 */

import { solveDrawingBook } from './drawing-book';

describe('DrawingBook', () => {
  describe('solveDrawingBook', () => {
    it('should return 1 when input 6 2', () => {
      expect(solveDrawingBook(6, 2)).toEqual(1);
    });

    it('should return 0 when input 5 4', () => {
      expect(solveDrawingBook(5, 4)).toEqual(0);
    });

    it('should return 1 when input 6 5', () => {
      expect(solveDrawingBook(6, 5)).toEqual(1);
    });

    it('should return 1 when input 6 4', () => {
      expect(solveDrawingBook(6, 4)).toEqual(1);
    });
  });
});
