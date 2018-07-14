/**
 * Test specs for dynamic-coin-changing problem
 * Codility - DynamicCoinChanging
 */

import { solution } from './dynamic-coin-changing';

describe('Codility - DynamicCoinChanging', () => {
  describe('solution', () => {
    describe('Example tests', () => {
      it('should return 2 for Example 1 input []', () => {
        expect(solution([1, 3, 4], 6)).toEqual(2);
      });
    });
  });
});
