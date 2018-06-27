/**
 * Test specs for flip problem
 * Interviewbit - Flip
 */

import { generateArray } from '@challenges/util';

import { flip } from './flip';

describe('Interviewbit - Flip', () => {
  describe('flip', () => {
    describe('Example tests', () => {
      it('should return [1, 1] for Example 1 input 010', () => {
        expect(flip('010')).toEqual([1, 1]);
      });

      it('should return [] for Example 2 input 111', () => {
        expect(flip('111')).toEqual([]);
      });

      it('should return [1, 1] for Example 2 input 011', () => {
        expect(flip('011')).toEqual([1, 1]);
      });

      it('should return [3, 3] for Example 2 input 1101', () => {
        expect(flip('1101')).toEqual([3, 3]);
      });
    });

    describe('Correctness tests', () => {
      it('should return [1, 3] for Sample 1 input 000', () => {
        expect(flip('000')).toEqual([1, 3]);
      });

      // 1101010001
      // [-1, -1, 1, -1, 1, -1, 1, 1, 1, -1]
      // [-1, 1, 2, 3, 2, 3, 2, 3, 2, 3]
      it('should return [3, 9] for Sample 2 input 1101010001', () => {
        expect(flip('1101010001')).toEqual([3, 9]);
      });

      it('should return [1, 1] for Extreme 1 input 0', () => {
        expect(flip('0')).toEqual([1, 1]);
      });

      it('should return [] for Extreme 2 input 1', () => {
        expect(flip('1')).toEqual([]);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        flip(generateArray(100, 2).join(''));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        flip(generateArray(10e3, 2).join(''));
      });
    });
  });
});
