/**
 * Test specs for flags problem
 */

import { generateArray } from '@challenges/util';

import { solveFlags } from './flags';

describe('Flags', () => {
  describe('solveFlags', () => {
    describe('Example tests', () => {
      it('should return 3 for Example 1 input [1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]', () => {
        expect(solveFlags([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])).toEqual(3);
      });

      it('should return 2 for Example 2 input [1, 5, 3, 2, 1, 1, 1, 5, 1]', () => {
        expect(solveFlags([1, 5, 3, 2, 1, 1, 1, 5, 1])).toEqual(2);
      });
    });

    describe('Correctness tests', () => {
      it('should return 1 for Sample 1 input [1, 2, 1, 4]', () => {
        // peaks 1
        expect(solveFlags([1, 2, 1, 4])).toEqual(1);
      });

      it('should return 2 for Sample 2 input [1, 2, 1, 2, 1]', () => {
        // peaks 1 3
        expect(solveFlags([1, 2, 1, 2, 1])).toEqual(2);
      });

      it('should return 0 for Sample 3 input [1, 1, 1, 1]', () => {
        // peaks 0
        expect(solveFlags([1, 1, 1, 1])).toEqual(0);
      });

      it('should return 0 for Extreme input [1]', () => {
        expect(solveFlags([1])).toEqual(0);
      });
    });

    describe('Performance tests', () => {
      it(
        'should run for Medium input of 100 items',
        () => {
          solveFlags(generateArray(100));
        },
        100
      );

      it(
        'should run for Large 1 input of 10E3 items',
        () => {
          solveFlags(generateArray(10e3));
        },
        100
      );

      it(
        'should run for Large 2 input of 50E3 items',
        () => {
          solveFlags(generateArray(50e3));
        },
        100
      );

      it(
        'should run for Large 3 input of 100E3 items',
        () => {
          solveFlags(generateArray(100e3));
        },
        100
      );
    });
  });
});
