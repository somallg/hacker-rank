/**
 * Test specs for count-non-divisible problem
 * Codility - CountNonDivisible
 */

import { generateArray } from '@challenges/util';

import { solution } from './count-non-divisible';

describe('Codility - CountNonDivisible', () => {
  describe('solution', () => {
    describe('Example tests', () => {
      it('should return [2, 4, 3, 2, 0] for Example 1 input [3, 1, 2, 3, 6]', () => {
        const result = solution([3, 1, 2, 3, 6]);

        expect(result.length).toEqual(5);
        expect(result).toEqual([2, 4, 3, 2, 0]);
      });

      it('should return [1, 3, 1, 2] for Example 2 input [3, 1, 3, 5]', () => {
        const result = solution([3, 1, 3, 5]);

        expect(result.length).toEqual(4);
        expect(result).toEqual([1, 3, 1, 2]);
      });
    });

    describe('Correctness tests', () => {
      it('should return [3, 2, 2, 1] for Sample 1 input [1, 2, 3, 4]', () => {
        expect(solution([1, 2, 3, 4])).toEqual([3, 2, 2, 1]);
      });

      it('should return [3, 4, 4, 5, 3, 1] for Sample 2 input [4, 3, 2, 1, 10, 100]', () => {
        expect(solution([4, 3, 2, 1, 10, 100])).toEqual([3, 4, 4, 5, 3, 1]);
      });

      it('should return [1] for Extreme 1 input [1]', () => {
        expect(solution([1])).toEqual([0]);
      });

      it('should return [9] for Extreme 2 input [9]', () => {
        expect(solution([9])).toEqual([0]);
      });
    });

    describe('Performance tests', () => {
      it(
        'should run for Medium input of 100 items',
        () => {
          expect(solution(generateArray(100)).length).toEqual(100);
        },
        100
      );

      it(
        'should run for Large 1 input of 10E3 items',
        () => {
          expect(solution(generateArray(10e3)).length).toEqual(10e3);
        },
        100
      );

      it(
        'should run for Large 2 input of 50E3 items',
        () => {
          expect(solution(generateArray(50e3)).length).toEqual(50e3);
        },
        100
      );

      it(
        'should run for Large 3 input of 100E3 items',
        () => {
          expect(solution(generateArray(100e3)).length).toEqual(100e3);
        },
        100
      );
    });
  });
});
