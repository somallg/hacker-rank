/**
 * Test specs for random-node problem
 * RandomNode
 */

import { randomNode } from './random-node';

describe('CrackingTheCodingInterview - RandomNode', () => {
  describe('randomNode', () => {
    it('should work', () => {
      const random: number = randomNode([20, 10, 30, 5, 15, 3, 7, 17]);
      expect(random).toBeGreaterThanOrEqual(3);
      expect(random).toBeLessThanOrEqual(30);
    });
  });
});
