/**
 * Test specs for sock-merchant problem
 * @url https://www.hackerrank.com/challenges/sock-merchant/problem
 */

import { solveSockMerchant } from './sock-merchant';

describe('SockMerchant', () => {
  describe('solveSockMerchant', () => {
    it('should return 0', () => {
      expect(solveSockMerchant([])).toEqual(0);
    });

    it('should return 0', () => {
      expect(solveSockMerchant([10])).toEqual(0);
    });

    it('should return 1', () => {
      expect(solveSockMerchant([10, 10])).toEqual(1);
    });

    it('should return 3', () => {
      expect(solveSockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])).toEqual(
        3
      );
    });
  });
});
