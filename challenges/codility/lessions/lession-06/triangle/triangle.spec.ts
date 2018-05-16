/**
 * Test specs for triangle problem
 */

import { solveTriangle } from './triangle';

describe('Triangle', () => {
  describe('solveTriangle', () => {
    it('should return 1 when input ', () => {
      expect(solveTriangle([10, 2, 5, 1, 8, 20])).toEqual(1);
    });

    it('should return 0 when input ', () => {
      expect(solveTriangle([10, 50, 5, 1])).toEqual(0);
    });

    it('should return 0 when input ', () => {
      expect(solveTriangle([10, 60, 5, 1])).toEqual(0);
    });
  });
});
