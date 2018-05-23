/**
 * Test specs for chocolates-by-numbers problem
 * Codility - ChocolatesByNumbers
 */

import { solution } from './chocolates-by-numbers';

describe('Codility - ChocolatesByNumbers', () => {
  describe('solution', () => {
    describe('Example tests', () => {
      it('should return 5 for Example 1 input 10, 4', () => {
        expect(solution(10, 4)).toEqual(5);
      });

      it('should return 10 for Example 2 input 10, 3', () => {
        expect(solution(10, 3)).toEqual(10);
      });
    });

    describe('Correctness tests', () => {
      it('should return 100 for Sample 1 input 100 3', () => {
        expect(solution(100, 3)).toEqual(100);
      });

      it('should return 2 for Sample 2 input 2 3', () => {
        expect(solution(2, 3)).toEqual(2);
      });

      it('should return 1 for Extreme input 1, 1', () => {
        expect(solution(1, 1)).toEqual(1);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        solution(100, 2);
      });

      it('should run for Large 1 input of 10000 items', () => {
        solution(10000, 2);
      });

      it('should run for Large 2 input of 50000 items', () => {
        solution(50000, 2);
      });

      it('should run for Large 3 input of 100000 items', () => {
        solution(100000, 2);
      });
    });
  });
});
