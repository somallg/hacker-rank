/**
 * Test specs for greedy-canoeist problem
 * Codility - GreedyCanoeist
 */

import { greedyCanoeist } from './greedy-canoeist';

describe('Codility - GreedyCanoeist', () => {
  describe('solution', () => {
    describe('Example tests', () => {
      it('should return 2 for Example 1 input 7 [1, 2, 4, 5]', () => {
        expect(greedyCanoeist([1, 2, 4, 5], 6)).toEqual(2);
      });
    });
  });
});
