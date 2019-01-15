/**
 * Test specs for max-slice-sum problem
 */

import { generateArray } from '@challenges/util';

import { solveMaxSliceSum } from './max-slice-sum';

describe('MaxSliceSum', () => {
  describe('solveMaxSliceSum', () => {
    describe('Example tests', () => {
      it('should return 5 for Example 1 input [3, 2, -6, 4, 0]', () => {
        expect(solveMaxSliceSum([3, 2, -6, 4, 0])).toEqual(5);
      });

      it('should return 21 for Example 2 input [4, 0, 1, -10, 20, 1]', () => {
        expect(solveMaxSliceSum([4, 0, 1, -10, 20, 1])).toEqual(21);
      });
    });

    describe('Correctness tests', () => {
      it('should return 8 for Sample 1 input [3, 2, -1, 4, 0]', () => {
        expect(solveMaxSliceSum([3, 2, -1, 4, 0])).toEqual(8);
      });

      it('should return 5 for Sample 2 input [-1, 2, -1, 4, 0]', () => {
        expect(solveMaxSliceSum([-1, 2, -1, 4, 0])).toEqual(5);
      });

      it('should return 5 for Sample 3 input [3, 2, -6, -4, 0]', () => {
        expect(solveMaxSliceSum([3, 2, -6, -4, 0])).toEqual(5);
      });

      it('should return 1 for Extreme input [1]', () => {
        expect(solveMaxSliceSum([1])).toEqual(1);
      });

      it('should return -1 for All Negative input [-2, -1, -3]', () => {
        expect(solveMaxSliceSum([-2, -1, -3])).toEqual(-1);
      });

      it('should return 6 for All Positive input [2, 1, 3]', () => {
        expect(solveMaxSliceSum([2, 1, 3])).toEqual(6);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium input of 100 items', () => {
        solveMaxSliceSum(generateArray(100));
      }, 100);

      it('should run for Large 1 input of 10E3 items', () => {
        solveMaxSliceSum(generateArray(10e3));
      }, 100);

      it('should run for Large 2 input of 50E3 items', () => {
        solveMaxSliceSum(generateArray(50e3));
      }, 100);

      it('should run for Large 3 input of 100E3 items', () => {
        solveMaxSliceSum(generateArray(100e3));
      }, 100);
    });
  });
});
