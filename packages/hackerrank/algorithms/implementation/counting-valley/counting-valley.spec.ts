/**
 * Test specs for counting-valley problem
 * @url https://www.hackerrank.com/challenges/counting-valley/problem
 */

import { solveCountingValley } from './counting-valley';

describe('CountingValley', () => {
  describe('solveCountingValley', () => {
    it('should return 1 when input 8 UDDDUDUU', () => {
      expect(solveCountingValley(8, 'UDDDUDUU')).toEqual(1);
    });

    it('should return 2 when input ', () => {
      expect(solveCountingValley(12, 'DDUUDDUDUUUD')).toEqual(2);
    });
  });
});
