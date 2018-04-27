/**
 * Test specs for find-digits problem
 * @url https://www.hackerrank.com/challenges/find-digits/problem
 */

import { solveFindDigits, toDigits } from './find-digits';

describe('FindDigits', () => {
  describe('toDigits', () => {
    it('should return when input ', () => {
      expect(toDigits(12)).toEqual([1, 2]);
    });

    it('should return when input ', () => {
      expect(toDigits(1012)).toEqual([1, 0, 1, 2]);
    });
  });

  describe('solveFindDigits', () => {
    it('should return when input ', () => {
      expect(solveFindDigits(12)).toEqual(2);
    });

    it('should return when input ', () => {
      expect(solveFindDigits(1012)).toEqual(3);
    });
  });
});
