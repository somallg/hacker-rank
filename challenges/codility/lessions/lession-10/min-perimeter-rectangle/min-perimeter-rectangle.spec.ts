/**
 * Test specs for min-perimeter-rectangle problem
 */

import { solveMinPerimeterRectangle } from './min-perimeter-rectangle';

describe('MinPerimeterRectangle', () => {
  describe('solveMinPerimeterRectangle', () => {
    describe('Example tests', () => {
      it('should return 22 for Example 1 input ', () => {
        expect(solveMinPerimeterRectangle(30)).toEqual(22);
      });

      it('should return 12 for Example 2 input ', () => {
        expect(solveMinPerimeterRectangle(9)).toEqual(12);
      });
    });

    describe('Correctness tests', () => {
      it('should return 4 for Sample 4 input ', () => {
        expect(solveMinPerimeterRectangle(4)).toEqual(8);
      });

      it('should return 14 for Sample 2 input ', () => {
        expect(solveMinPerimeterRectangle(10)).toEqual(14);
      });

      it('should return 24 for Sample 3 input ', () => {
        expect(solveMinPerimeterRectangle(11)).toEqual(24);
      });

      it('should return 4 for Extreme input ', () => {
        expect(solveMinPerimeterRectangle(1)).toEqual(4);
      });
    });

    describe('Performance tests', () => {
      it(
        'should run for Medium input of 100 items',
        () => {
          solveMinPerimeterRectangle(100);
        },
        100
      );

      it(
        'should run for Large 1 input of 10E3 items',
        () => {
          solveMinPerimeterRectangle(10e3);
        },
        100
      );

      it(
        'should run for Large 2 input of 50E3 items',
        () => {
          solveMinPerimeterRectangle(50e3);
        },
        100
      );

      it(
        'should run for Large 3 input of 100E3 items',
        () => {
          solveMinPerimeterRectangle(100e3);
        },
        100
      );
    });
  });
});
