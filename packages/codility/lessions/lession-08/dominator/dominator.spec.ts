/**
 * Test specs for dominator problem
 */

import { generateArray } from '@challenges/util';

import { solveDominator } from './dominator';

describe('Dominator', () => {
  describe('solveDominator', () => {
    it('should return for Extreme Simple input [1]', () => {
      expect(solveDominator([1])).toEqual(0);
    });

    it('should return for Duplicates input [2, 2]', () => {
      expect(solveDominator([2, 2])).toEqual(0);
    });

    it('should return for Extreme Double input [2, 1, 2]', () => {
      expect(solveDominator([2, 1, 2])).toEqual(0);
    });

    it('should return for input [0, 1, 2]', () => {
      expect(solveDominator([0, 1, 2])).toEqual(-1);
    });

    it('should return 11 for Example input [3, 4, 3, 2, 3, -1, 3, 3]', () => {
      expect(solveDominator([3, 4, 3, 2, 3, -1, 3, 3])).toEqual(0);
    });

    it('should return 11 for Sample input [1, 2, 3, 4, 4, 4, 4]', () => {
      expect(solveDominator([1, 2, 3, 4, 4, 4, 4])).toEqual(3);
    });

    it(
      'should run for Large input 50E3 items',
      () => {
        solveDominator(generateArray(50e3));
      },
      100
    );

    it(
      'should run for Extra Large input 100E3 items',
      () => {
        solveDominator(generateArray(100e3));
      },
      100
    );
  });
});
