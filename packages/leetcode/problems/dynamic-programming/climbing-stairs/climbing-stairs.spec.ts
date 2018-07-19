/**
 * Test specs for climbing-stairs problem
 * Leetcode - ClimbingStairs
 */

import { climbingStairs } from './climbing-stairs';

describe('Leetcode - ClimbingStairs', () => {
  describe('climbingStairs', () => {
    describe('Example tests', () => {
      it('should return 2 for Example 1 input 2', () => {
        expect(climbingStairs(2)).toEqual(2);
      });

      it('should return 3 for Example 2 input 3', () => {
        expect(climbingStairs(3)).toEqual(3);
      });
    });
  });
});
