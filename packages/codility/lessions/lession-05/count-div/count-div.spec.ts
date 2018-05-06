/**
 * Test specs for count-div problem
 */

import { solveCountDiv } from './count-div';

describe('CountDiv', () => {
  describe('solveCountDiv', () => {
    it('should return 3 when input (from, to, k) = (6, 11, 2)', () => {
      expect(solveCountDiv(6, 11, 2)).toEqual(3);
    });

    it('should return 1 when input (from, to, k) = (6, 6, 2)', () => {
      expect(solveCountDiv(6, 6, 2)).toEqual(1);
    });

    it('should return 20 when input (from, to, k) = (11, 345, 17)', () => {
      expect(solveCountDiv(11, 345, 17)).toEqual(20);
    });

    it('should return 1 when input (from, to, k) = (0, 1, 11)', () => {
      expect(solveCountDiv(0, 1, 11)).toEqual(1);
    });

    it('should return 1 when input (from, to, k) = (0, 0, 11)', () => {
      expect(solveCountDiv(0, 0, 11)).toEqual(1);
    });

    it('should return 1 when input (from, to, k) = (10, 10, 5)', () => {
      expect(solveCountDiv(10, 10, 5)).toEqual(1);
    });

    it('should return 0 when input (from, to, k) = (10, 10, 7)', () => {
      expect(solveCountDiv(10, 10, 7)).toEqual(0);
    });

    it('should return 0 when input (from, to, k) = (10, 10, 20)', () => {
      expect(solveCountDiv(10, 10, 20)).toEqual(0);
    });
  });
});
