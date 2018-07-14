/**
 * Test specs for dynamic-frog-jump problem
 * Codility - DynamicFrogJump
 */

import { solution } from './dynamic-frog-jump';

describe('Codility - DynamicFrogJump', () => {
  describe('solution', () => {
    describe('Example tests', () => {
      it('should return 5 for Example 1 input []', () => {
        expect(solution([1, 2, 3, 4], 5, 10)).toEqual(5);
      });
    });
  });
});
