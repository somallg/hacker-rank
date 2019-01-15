/**
 * Test specs for stone-wall problem
 */

import { generateArray } from '../../../../util/array';
import { solveStoneWall } from './stone-wall';

describe('StoneWall', () => {
  describe('solveStoneWall', () => {
    it('should return for Extreme Simple input [1]', () => {
      expect(solveStoneWall([1])).toEqual(1);
    });

    it('should return for Duplicates input [2, 2]', () => {
      expect(solveStoneWall([2, 2])).toEqual(1);
    });

    it('should return for Extreme Double input [2, 1]', () => {
      expect(solveStoneWall([2, 1])).toEqual(2);
    });

    it('should return for Empty input [0, 0]', () => {
      expect(solveStoneWall([0, 0])).toEqual(0);
    });

    it('should return 7 for Example input [8, 8, 5, 7, 9, 8, 7, 4, 8]', () => {
      expect(solveStoneWall([8, 8, 5, 7, 9, 8, 7, 4, 8])).toEqual(7);
    });

    it('should return 3 for Example input [2, 3, 2, 1]', () => {
      expect(solveStoneWall([2, 3, 2, 1])).toEqual(3);
    });

    it('should return 8 for Example input [2, 5, 1, 4, 6, 7, 9, 10, 1]', () => {
      expect(solveStoneWall([2, 5, 1, 4, 6, 7, 9, 10, 1])).toEqual(8);
    });

    it('should return 4 for Sample input [1, 2, 3, 4]', () => {
      expect(solveStoneWall([1, 2, 3, 4])).toEqual(4);
    });

    it('should run for Large input 50E3 items', () => {
      solveStoneWall(generateArray(50e3));
    }, 100);

    it('should run for Extra Large input 100E3 items', () => {
      solveStoneWall(generateArray(100e3));
    }, 100);
  });
});
