/**
 * Test specs for ways-to-decode problem
 * Interviewbit - WaysToDecode
 */

import { solveWaysToDecode } from './ways-to-decode';
import { generateArray } from '@challenges/util';

describe('Interviewbit - WaysToDecode', () => {
  describe('solveWaysToDecode', () => {
    describe('Example tests', () => {
      it('should return 2 for Example 1 input 12', () => {
        expect(solveWaysToDecode('12')).toEqual(2);
      });

      it('should return 6 for Example 2 input 25114', () => {
        expect(solveWaysToDecode('25114')).toEqual(6);
      });
    });

    describe('Correctness tests', () => {
      it('should return 3 for Sample 1 input 1234', () => {
        expect(solveWaysToDecode('1234')).toEqual(3);
      });

      it('should return 2 for Sample 2 input 4321', () => {
        expect(solveWaysToDecode('4321')).toEqual(2);
      });

      it('should return 89 for Sample 3 input 1111111111', () => {
        expect(solveWaysToDecode('1111111111')).toEqual(89);
      });

      it('should return 1 for Extreme 1 input 3333333333', () => {
        expect(solveWaysToDecode('3333333333')).toEqual(1);
      });

      it('should return 0 for Extreme 2 input 2002', () => {
        expect(solveWaysToDecode('2002')).toEqual(0);
      });

      it('should return 0 for Extreme 3 input 32925665678138257423442343752148360796465852883409126159293254159974370974059818198867156827877059067081419274873853679038', () => {
        expect(
          solveWaysToDecode(
            '32925665678138257423442343752148360796465852883409126159293254159974370974059818198867156827877059067081419274873853679038'
          )
        ).toEqual(0);
      });

      it('should return 4 for Extreme 4 input 2611055971756562', () => {
        expect(solveWaysToDecode('2611055971756562')).toEqual(4);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        solveWaysToDecode(generateArray(100, 27).join(''));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        solveWaysToDecode(generateArray(10e3, 27).join(''));
      });
    });
  });
});
