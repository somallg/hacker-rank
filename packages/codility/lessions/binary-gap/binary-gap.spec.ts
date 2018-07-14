/**
 * Test specs for binary-gap problem
 */

import { solveBinaryGap } from './binary-gap';

describe('BinaryGap', () => {
  describe('solveBinaryGap', () => {
    it('should return 2 when input 9', () => {
      expect(solveBinaryGap(9)).toEqual(2);
    });

    it('should return 4 when input 529', () => {
      expect(solveBinaryGap(529)).toEqual(4);
    });

    it('should return 1 when input 20', () => {
      expect(solveBinaryGap(20)).toEqual(1);
    });

    it('should return 0 when input 15', () => {
      expect(solveBinaryGap(20)).toEqual(1);
    });

    it('should return 28 when input 1610612737', () => {
      expect(solveBinaryGap(1610612737)).toEqual(28);
    });

    it('should return 0 when input 0', () => {
      expect(solveBinaryGap(0)).toEqual(0);
    });
  });
});
