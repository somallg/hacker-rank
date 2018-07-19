/**
 * Test specs for tie-ropes problem
 * Codility - TieRopes
 */

import { generateArray } from '@challenges/util';

import { solution } from './tie-ropes';

describe('Codility - TieRopes', () => {
  describe('solution', () => {
    describe('Example tests', () => {
      it('should return 3 for Example 1 input [ 1, 2, 3, 4, 1, 1, 3]', () => {
        expect(solution(4, [1, 2, 3, 4, 1, 1, 3])).toEqual(3);
      });
    });

    describe('Correctness tests', () => {
      it('should return 2 for Sample 1 input 4, [1, 2, 3, 4]', () => {
        expect(solution(4, [1, 2, 3, 4])).toEqual(2);
      });

      it('should return 2 for Sample 2 input 4, [4, 3, 2, 1]', () => {
        expect(solution(4, [4, 3, 2, 1])).toEqual(2);
      });

      it('should return 1 for Extreme 1 input 1, [1]', () => {
        expect(solution(1, [1])).toEqual(1);
      });

      it('should return 0 for Extreme 2 input 2, [1]', () => {
        expect(solution(2, [1])).toEqual(0);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        solution(100, generateArray(100));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        solution(100, generateArray(10e3));
      });

      it('should run for Large 2 input of 50e3 items', () => {
        solution(100, generateArray(50e3));
      });

      it('should run for Large 3 input of 100e3 items', () => {
        solution(100, generateArray(100e3));
      });
    });
  });
});
