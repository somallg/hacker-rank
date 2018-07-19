/**
 * Test specs for set-covering problem
 * @url https://www.hackerrank.com/challenges/set-covering/problem
 */

import { solveSetCovering, intersect, difference } from './set-covering';

describe('SetCovering', () => {
  describe('intersect', () => {
    it('should works', () => {
      expect(intersect<number>(new Set([1, 2, 3, 4]), new Set([2, 3]))).toEqual(
        new Set([2, 3])
      );
    });
  });

  describe('difference', () => {
    it('should works', () => {
      expect(
        difference<number>(new Set([1, 2, 3, 4]), new Set([2, 3]))
      ).toEqual(new Set([1, 4]));
    });
  });

  describe('solveSetCovering', () => {
    it('should return when input ', () => {
      const statesNeeded = new Set([
        'mt',
        'wa',
        'or',
        'id',
        'nv',
        'ut',
        'ca',
        'az'
      ]);

      const stations = new Map([
        ['kone', new Set(['id', 'nv', 'ut'])],
        ['ktwo', new Set(['wa', 'id', 'mt'])],
        ['kthree', new Set(['or', 'nv', 'ca'])],
        ['kfour', new Set(['nv', 'ut'])],
        ['kfive', new Set(['ca', 'az'])]
      ]);

      expect(solveSetCovering(statesNeeded, stations)).toEqual(
        new Set(['ktwo', 'kthree', 'kone', 'kfive'])
      );
    });
  });
});
