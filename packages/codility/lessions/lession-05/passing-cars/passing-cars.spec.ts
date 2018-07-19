/**
 * Test specs for passing-cars problem
 */

import { solvePassingCars } from './passing-cars';

describe('PassingCars', () => {
  describe('solvePassingCars', () => {
    it('should return 0 when input [0, 0, 0, 0, 0]', () => {
      expect(solvePassingCars([0, 0, 0, 0, 0])).toEqual(0);
    });

    it('should return 5 when input [0, 1, 0, 1, 1]', () => {
      expect(solvePassingCars([0, 1, 0, 1, 1])).toEqual(5);
    });

    it('should return 0 when input [1, 0]', () => {
      expect(solvePassingCars([1, 0])).toEqual(0);
    });

    it('should return 0 when input [0, 1]', () => {
      expect(solvePassingCars([0, 1])).toEqual(1);
    });
  });
});
