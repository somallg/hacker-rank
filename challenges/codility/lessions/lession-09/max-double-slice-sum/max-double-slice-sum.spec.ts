/**
 * Test specs for max-double-slice-sum problem
 */

import { generateArray } from '@challenges/util';

import { solveMaxDoubleSliceSum } from './max-double-slice-sum';

describe('MaxDoubleSliceSum', () => {
  describe('solveMaxDoubleSliceSum', () => {
    describe('Example tests', () => {
      it('should return 17 for Example 1 input [3, 2, 6, -1, 4, 5, -1, 2]', () => {
        expect(solveMaxDoubleSliceSum([3, 2, 6, -1, 4, 5, -1, 2])).toEqual(17);
      });

      it('should return 3 for Example 2 input [1, -1, 1, 1, 1]', () => {
        expect(solveMaxDoubleSliceSum([1, -1, 1, 1, 1])).toEqual(2);
      });

      it('should return 26 for Example 3 input [3, 2, 6, -1, 4, 5, -10, 2, 8, 1]', () => {
        expect(
          solveMaxDoubleSliceSum([3, 2, 6, -1, 4, 5, -10, 2, 8, 1])
        ).toEqual(26);
      });

      it('should return 15 for Example 4 input [3, -2, 6, -1, 4, 5, -1, 2]', () => {
        expect(solveMaxDoubleSliceSum([3, -2, 6, -1, 4, 5, -1, 2])).toEqual(15);
      });

      it('should return 30 for Example 4 input [-8, 10, 20, -5, -7, -4]', () => {
        expect(solveMaxDoubleSliceSum([-8, 10, 20, -5, -7, -4])).toEqual(30);
      });
    });

    describe('Correctness tests', () => {
      it('should return 0 for Extreme Empty input [0, 0, 0]', () => {
        expect(solveMaxDoubleSliceSum([0, 0, 0])).toEqual(0);
      });

      it('should return 0 for Extreme Simple input [1, 1, 1]', () => {
        expect(solveMaxDoubleSliceSum([1, 1, 1])).toEqual(0);
      });

      it('should return 8 for Duplicates input [2, 2, -2, 2, 2, 2, 2]', () => {
        expect(solveMaxDoubleSliceSum([2, 2, -2, 2, 2, 2, 2])).toEqual(8);
      });

      it('should return 0 for Extreme Double input [2, 1, 2]', () => {
        expect(solveMaxDoubleSliceSum([2, 1, 2])).toEqual(0);
      });

      it('should return 6 for Sample input [1, 2, 3, 4]', () => {
        expect(solveMaxDoubleSliceSum([1, 2, 3, 4])).toEqual(3);
      });

      it('should return 4 for Sample input [4, 3, 2, 1]', () => {
        expect(solveMaxDoubleSliceSum([4, 3, 2, 1])).toEqual(3);
      });
    });

    describe('Performance tests', () => {
      it(
        'should run for Medium input of 100 items',
        () => {
          solveMaxDoubleSliceSum(generateArray(100));
        },
        100
      );

      it(
        'should run for Large 1 input of 10E3 items',
        () => {
          solveMaxDoubleSliceSum(generateArray(10e3));
        },
        100
      );

      it(
        'should run for Large 2 input of 50E3 items',
        () => {
          solveMaxDoubleSliceSum(generateArray(50e3));
        },
        100
      );

      it(
        'should run for Large 3 input of 100E3 items',
        () => {
          solveMaxDoubleSliceSum(generateArray(100e3));
        },
        100
      );
    });
  });
});
