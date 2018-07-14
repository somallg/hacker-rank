/**
 * Test specs for count-factors problem
 */

import { solveCountFactors } from './count-factors';

describe('CountFactors', () => {
  describe('solveCountFactors', () => {
    describe('Example tests', () => {
      it('should return 8 for Example 1 input 24', () => {
        expect(solveCountFactors(24)).toEqual(8);
      });

      it('should return 3 for Example 2 input 9', () => {
        expect(solveCountFactors(9)).toEqual(3);
      });
    });

    describe('Correctness tests', () => {
      it('should return 4 for Sample 1 input 10', () => {
        expect(solveCountFactors(10)).toEqual(4);
      });

      it('should return 3 for Sample 2 input 4', () => {
        expect(solveCountFactors(4)).toEqual(3);
      });

      it('should return 2 for Sample 3 input 11', () => {
        expect(solveCountFactors(11)).toEqual(2);
      });

      it('should return 1 for Extreme input 1', () => {
        expect(solveCountFactors(1)).toEqual(1);
      });
    });

    describe('Performance tests', () => {
      it(
        'should run for Medium input of 100 items',
        () => {
          solveCountFactors(100);
        },
        100
      );

      it(
        'should run for Large 1 input of 10E3 items',
        () => {
          solveCountFactors(10e3);
        },
        100
      );

      it(
        'should run for Large 2 input of 50E3 items',
        () => {
          solveCountFactors(50e3);
        },
        100
      );

      it(
        'should run for Large 3 input of 100E3 items',
        () => {
          solveCountFactors(100e3);
        },
        100
      );
    });
  });
});
