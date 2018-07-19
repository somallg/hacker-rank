/**
 * Test specs for beautiful-days-at-the-movies problem
 * @url https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
 */

import {
  reversed,
  solveBeautifulDaysAtTheMovies
} from './beautiful-days-at-the-movies';

describe('BeautifulDaysAtTheMovies', () => {
  describe('reversed', () => {
    it('should return 1 when input 1', () => {
      expect(reversed(1)).toEqual(1);
    });

    it('should return 1 when input 10', () => {
      expect(reversed(10)).toEqual(1);
    });

    it('should return 32 when input 23', () => {
      expect(reversed(23)).toEqual(32);
    });

    it('should return 12 when input 31', () => {
      expect(reversed(23)).toEqual(32);
    });
  });

  describe('solveBeautifulDaysAtTheMovies', () => {
    it('should return 2 when input 20 23 6', () => {
      expect(solveBeautifulDaysAtTheMovies(20, 23, 6)).toEqual(2);
    });

    it('should return 0 when input 20 21 5', () => {
      expect(solveBeautifulDaysAtTheMovies(20, 21, 5)).toEqual(0);
    });
  });
});
