/**
 * Test specs for count-semi-primes problem
 * Codility - CountSemiPrimes
 */

import { generateArray } from '@challenges/util';

import { solution } from './count-semi-primes';

describe('Codility - CountSemiPrimes', () => {
  describe('solution', () => {
    describe('Example tests', () => {
      it('should return [10, 4, 0] for Example 1 input 26 [1, 4, 16] [26, 10, 20]', () => {
        expect(solution(26, [1, 4, 16], [26, 10, 20])).toEqual([10, 4, 0]);
      });

      it('should return [1, 2, 3] for Example 2 input 9 [1] [9]', () => {
        expect(solution(9, [1], [9])).toEqual([3]);
      });
    });

    describe('Correctness tests', () => {
      it('should return [4, 2, 0, 1] for Sample 1 input 10 [1, 2, 3, 10] [10, 7, 5, 10]', () => {
        expect(solution(10, [1, 2, 3, 10], [10, 7, 5, 10])).toEqual([
          4,
          2,
          1,
          1
        ]);
      });

      it('should return [6, 2, 0, 0] for Sample 2 input 15 [1, 3, 7, 15] [15, 7, 7, 15]', () => {
        expect(solution(15, [1, 3, 7, 15], [15, 7, 7, 15])).toEqual([
          6,
          2,
          0,
          1
        ]);
      });

      it('should return [6, 2, 0, 0] for Sample 3 input 26 [1, 7, 13, 26] [26, 13, 7, 26]', () => {
        expect(solution(26, [1, 7, 13, 26], [26, 13, 13, 26])).toEqual([
          10,
          2,
          0,
          1
        ]);
      });

      it('should return [0] for Extreme input []', () => {
        expect(solution(1, [1], [1])).toEqual([0]);
      });
    });

    describe('Performance tests', () => {
      it(
        'should run for Medium input of 100 items',
        () => {
          solution(100, generateArray(100), generateArray(100));
        },
        100
      );

      it(
        'should run for Large 1 input of 10E3 items',
        () => {
          solution(10e3, generateArray(10e3), generateArray(10e3));
        },
        100
      );

      it(
        'should run for Large 2 input of 50E3 items',
        () => {
          solution(50e3, generateArray(50e3), generateArray(50e3));
        },
        100
      );

      it(
        'should run for Large 3 input of 100E3 items',
        () => {
          solution(100e3, generateArray(100e3), generateArray(100e3));
        },
        100
      );
    });
  });
});
