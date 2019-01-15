/**
 * Test specs for max-profit problem
 */

import { generateArray } from '@challenges/util';

import { solveMaxProfit } from './max-profit';

describe('MaxProfit', () => {
  describe('solveMaxProfit', () => {
    describe('Example tests', () => {
      it('should return 6 for Example input [23171, 21011, 21123, 21366, 21013, 21367]', () => {
        expect(
          solveMaxProfit([23171, 21011, 21123, 21366, 21013, 21367])
        ).toEqual(356);
      });
    });

    describe('Correctness tests', () => {
      it('should return for Extreme empty input [0]', () => {
        expect(solveMaxProfit([])).toEqual(0);
      });

      it('should return for Extreme Simple input [1]', () => {
        expect(solveMaxProfit([1])).toEqual(0);
      });

      it('should return for Duplicates input [2, 2]', () => {
        expect(solveMaxProfit([2, 2])).toEqual(0);
      });

      it('should return for Extreme Double input [2, 1]', () => {
        expect(solveMaxProfit([2, 1])).toEqual(0);
      });

      it('should return for No Intersections input [0, 0]', () => {
        expect(solveMaxProfit([0, 0])).toEqual(0);
      });

      it('should return 3 for Sample input [1, 2, 3, 4]', () => {
        expect(solveMaxProfit([1, 2, 3, 4])).toEqual(3);
      });

      it('should return 0 for Sample input [4, 3, 2, 1]', () => {
        expect(solveMaxProfit([4, 3, 2, 1])).toEqual(0);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium input of 100 items', () => {
        solveMaxProfit(generateArray(100));
      }, 100);

      it('should run for Large 1 input of 10E3 items', () => {
        solveMaxProfit(generateArray(10e3));
      }, 100);

      it('should run for Large 2 input of 50E3 items', () => {
        solveMaxProfit(generateArray(50e3));
      }, 100);

      it('should run for Large 3 input of 100E3 items', () => {
        solveMaxProfit(generateArray(100e3));
      }, 100);
    });
  });
});
