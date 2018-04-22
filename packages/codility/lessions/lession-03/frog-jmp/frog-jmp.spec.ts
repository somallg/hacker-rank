/**
 * Test specs for frog-jmp problem
 * @url https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
 */

import { solveFrogJmp } from './frog-jmp';

describe('FrogJmp', () => {
  describe('solveFrogJmp', () => {
    it('should return 2 when input 10 41 30', () => {
      expect(solveFrogJmp(10, 41, 30)).toEqual(2);
    });

    it('should return 3 when input 10 85 30', () => {
      expect(solveFrogJmp(10, 85, 30)).toEqual(3);
    });

    it('should return 1 when input 10 40 30', () => {
      expect(solveFrogJmp(10, 40, 30)).toEqual(1);
    });
  });
});
