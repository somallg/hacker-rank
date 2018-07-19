/**
 * Test specs for gcd problem
 * Codility - Gcd
 */

import { gcd } from './gcd';

describe('Codility - Gcd', () => {
  describe('gcd', () => {
    describe('Example tests', () => {
      it('should return 3 for Example 1 input 24, 9', () => {
        expect(gcd(24, 9, 1)).toEqual(3);
      });
    });

    describe('Correctness tests', () => {
      it('should return 3 for Sample 1 input 3 9', () => {
        expect(gcd(3, 9, 1)).toEqual(3);
      });

      it('should return 1 for Sample 2 input 1 10', () => {
        expect(gcd(10, 1, 1)).toEqual(1);
      });

      it('should return 1 for Sample 3 input 11 19', () => {
        expect(gcd(19, 11, 1)).toEqual(1);
      });

      it('should return 1 for Extreme input 1, 1', () => {
        expect(gcd(1, 1, 1)).toEqual(1);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100', () => {
        gcd(1, 100, 1);
      });

      it('should run for Large 1 input of 10000', () => {
        gcd(1, 10e3, 1);
      });

      it('should run for Large 2 input of 50000', () => {
        gcd(1, 50e3, 1);
      });

      it('should run for Large 3 input of 100000 items', () => {
        gcd(1, 100e3, 1);
      });
    });
  });
});
