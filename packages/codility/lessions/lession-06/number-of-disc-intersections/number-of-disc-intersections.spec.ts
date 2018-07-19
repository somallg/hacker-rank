/**
 * Test specs for number-of-disc-intersections problem
 */

import { generateArray } from '@challenges/util';

import {
  findIndexOfElementGreaterThen,
  solveNumberOfDiscIntersections
} from './number-of-disc-intersections';

describe('solveNumberOfDiscIntersections Problem', () => {
  describe('findIndexOfElementGreaterThen', () => {
    it('should return for Extreme Simple input [1]', () => {
      expect(findIndexOfElementGreaterThen([1], 1, 0)).toEqual(0);
    });

    it('should return for Duplicates input [1, 1]', () => {
      expect(findIndexOfElementGreaterThen([1, 1], 1, 1)).toEqual(1);
    });

    it('should return for Extreme Double input [2, 1]', () => {
      expect(findIndexOfElementGreaterThen([1, 2], 1, 0)).toEqual(0);
    });

    it('should return 2 for Example input [1, 2, 3, 4, 5]', () => {
      expect(findIndexOfElementGreaterThen([1, 2, 3, 4, 5], 3, 0)).toEqual(2);
    });

    it('should return 2 for Example input [1, 2, 3, 4, 5]', () => {
      expect(findIndexOfElementGreaterThen([1, 2, 3, 4, 5], 3, 0)).toEqual(2);
    });

    it('should return 4 for Example input [-1, 1, 3, 3, 3]', () => {
      expect(findIndexOfElementGreaterThen([-1, 1, 3, 3, 3], 3, 0)).toEqual(4);
    });

    it('should return 1 for Sample input [1, 2, 3, 4]', () => {
      expect(findIndexOfElementGreaterThen([1, 2, 3, 4], 2, 1)).toEqual(1);
    });

    it('should return 1 for Sample input [1, 2, 3, 4]', () => {
      expect(findIndexOfElementGreaterThen([1, 2, 3, 4], 4, 0)).toEqual(3);
    });

    it('should run for Large input 50_000 items', () => {
      findIndexOfElementGreaterThen(generateArray(50_000), 1, 0);
    });

    it('should run for Extra Large input 100_000 items', () => {
      findIndexOfElementGreaterThen(generateArray(100_000), 1, 0);
    });
  });

  describe('solveNumberOfDiscIntersections', () => {
    it('should return for Extreme Simple input [1]', () => {
      expect(solveNumberOfDiscIntersections([1])).toEqual(0);
    });

    it('should return for Duplicates input [2, 2]', () => {
      expect(solveNumberOfDiscIntersections([2, 2])).toEqual(1);
    });

    it('should return for Extreme Double input [2, 1]', () => {
      expect(solveNumberOfDiscIntersections([2, 1])).toEqual(1);
    });

    it('should return for Extreme Triple input [1, 1, 1]', () => {
      expect(solveNumberOfDiscIntersections([1, 1, 1])).toEqual(3);
    });

    it('should return for No Intersections input [0, 0]', () => {
      expect(solveNumberOfDiscIntersections([0, 0])).toEqual(0);
    });

    it('should return 11 for Example input [1, 5, 2, 1, 4, 0]', () => {
      expect(solveNumberOfDiscIntersections([1, 5, 2, 1, 4, 0])).toEqual(11);
    });

    it('should return 6 for Example input [1, 0, 1, 0, 1]', () => {
      expect(solveNumberOfDiscIntersections([1, 0, 1, 0, 1])).toEqual(6);
    });

    it('should return 11 for Sample input [1, 2, 3, 4]', () => {
      expect(solveNumberOfDiscIntersections([1, 2, 3, 4])).toEqual(6);
    });

    it('should run for Large input 50E3 items', () => {
      solveNumberOfDiscIntersections(generateArray(50e3));
    });

    it('should run for Extra Large input 100E3 items', () => {
      solveNumberOfDiscIntersections(generateArray(100e3));
    });
  });
});
