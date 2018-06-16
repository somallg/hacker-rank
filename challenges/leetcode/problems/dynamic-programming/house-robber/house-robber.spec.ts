/**
 * Test specs for house-robber problem
 * Leetcode - HouseRobber
 */

import { generateArray } from '@challenges/util';

import { houseRobber } from './house-robber';

describe('Leetcode - HouseRobber', () => {
  describe('houseRobber', () => {
    describe('Example tests', () => {
      it('should return 4 for Example 1 input [1, 2, 3, 1]', () => {
        expect(houseRobber([1, 2, 3, 1])).toEqual(4);
      });

      it('should return 4 for Example 2 input [2, 1, 1, 2]', () => {
        expect(houseRobber([2, 1, 1, 2])).toEqual(4);
      });

      it('should return 12 for Example 3 input [2, 7, 9, 3, 1]', () => {
        expect(houseRobber([2, 7, 9, 3, 1])).toEqual(12);
      });
    });

    describe('Correctness tests', () => {
      it('should return 6 for Sample 1 input [1, 2, 3, 4]', () => {
        expect(houseRobber([1, 2, 3, 4])).toEqual(6);
      });

      it('should return 6 for Sample 2 input [4, 3, 2, 1]', () => {
        expect(houseRobber([4, 3, 2, 1])).toEqual(6);
      });

      it('should return 0 for Extreme input []', () => {
        expect(houseRobber([])).toEqual(0);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        houseRobber(generateArray(100));
      });

      it('should run for Large 1 input of 1e3 items', () => {
        houseRobber(generateArray(1e3));
      });
    });
  });
});
