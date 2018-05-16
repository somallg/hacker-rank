/**
 * Test specs for equi-leader problem
 */

import { generateArray } from '@challenges/util';

import { solveEquiLeader } from './equi-leader';

describe('EquiLeader', () => {
  describe('solveEquiLeader', () => {
    it('should return for Extreme Simple input [1]', () => {
      expect(solveEquiLeader([1])).toEqual(0);
    });

    it('should return for Duplicates input [2, 2]', () => {
      expect(solveEquiLeader([2, 2])).toEqual(1);
    });

    it('should return for Extreme Double input [2, 1]', () => {
      expect(solveEquiLeader([2, 1])).toEqual(0);
    });

    it('should return 2 for Example input [4, 3, 4, 4, 4, 2]', () => {
      expect(solveEquiLeader([4, 3, 4, 4, 4, 2])).toEqual(2);
    });

    it('should return 0 for Sample input [1, 2, 3, 4]', () => {
      expect(solveEquiLeader([1, 2, 3, 4])).toEqual(0);
    });

    it(
      'should run for Large input 50E3 items',
      () => {
        solveEquiLeader(generateArray(50e3));
      },
      100
    );

    it(
      'should run for Extra Large input 100E3 items',
      () => {
        solveEquiLeader(generateArray(100e3));
      },
      100
    );
  });
});
