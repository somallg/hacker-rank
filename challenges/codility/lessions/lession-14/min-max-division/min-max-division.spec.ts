/**
 * Test specs for min-max-division problem
 * Codility - MinMaxDivision
 */

import { generateArray } from '@challenges/util';

import { solution } from './min-max-division';

describe('Codility - MinMaxDivision', () => {
  describe('solution', () => {
    describe('Example tests', () => {
      it('should return 6 for Example 1 input []', () => {
        expect(solution(3, 5, [2, 1, 5, 1, 2, 2, 2])).toEqual(6);
      });
    });

    describe('Correctness tests', () => {
      it('should return 10 for Sample 1 input 1 4 [1, 2, 3, 4]', () => {
        expect(solution(1, 4, [1, 2, 3, 4])).toEqual(10);
      });

      it('should return 6 for Sample 2 input 2 4 [4, 3, 2, 1]', () => {
        expect(solution(2, 4, [4, 3, 2, 1])).toEqual(6);
      });

      it('should return 4 for Sample 3 input 3 4 [4, 3, 2, 1]', () => {
        expect(solution(3, 4, [4, 3, 2, 1])).toEqual(4);
      });

      it('should return 0 for Extreme 1 input 1 1 [0]', () => {
        expect(solution(1, 1, [0])).toEqual(0);
      });

      it('should return 0 for Extreme 2 input 1 1 [1]', () => {
        expect(solution(1, 5, [5])).toEqual(5);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        solution(50, 100, generateArray(100, 1).concat(10e3));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        solution(50, 100, generateArray(10e3, 1).concat(10e3));
      });

      it('should run for Large 2 input of 50e3 items', () => {
        solution(50, 100, generateArray(50e3, 1).concat(10e3));
      });

      it('should run for Large 3 input of 100e3 items', () => {
        solution(50, 100, generateArray(100e3, 1).concat(10e3));
      });
    });
  });
});
