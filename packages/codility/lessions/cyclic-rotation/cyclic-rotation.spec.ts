/**
 * Test specs for cyclic-rotation problem
 */

import { solveCyclicRotation } from './cyclic-rotation';

describe('CyclicRotation', () => {
  describe('solveCyclicRotation', () => {
    it('should return [] when input [] any', () => {
      expect(solveCyclicRotation([], 10)).toEqual([]);
    });

    it('should return [1] when input [1] any', () => {
      expect(solveCyclicRotation([1], 10)).toEqual([1]);
    });

    it('should return [1, 2] when input [1, 2] 1', () => {
      expect(solveCyclicRotation([1, 2], 1)).toEqual([2, 1]);
    });

    it('should return [1, 2] when input [1, 2] 2', () => {
      expect(solveCyclicRotation([1, 2], 2)).toEqual([1, 2]);
    });

    it('should return [1, 2] when input [3, 8, 9, 7, 6], 3', () => {
      expect(solveCyclicRotation([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8]);
    });
  });
});
