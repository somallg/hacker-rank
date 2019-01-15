/**
 * Test specs for length-of-longest-subsequence problem
 * Interviewbit - LengthOfLongestSubsequence
 */

import { generateArray } from '@challenges/util';

import {
  longestSubsequenceEndingAt,
  longestSubsequenceStartingAt,
  solveLengthOfLongestSubsequence
} from './length-of-longest-subsequence';

describe('Interviewbit - LengthOfLongestSubsequence', () => {
  describe('longestSubsequenceEndingAt', () => {
    it('should return correct', () => {
      // prettier-ignore
      expect(
        longestSubsequenceEndingAt([1, 11, 2, 10, 4, 5, 2, 1]))
        .toEqual([1, 2, 2, 3, 3, 4, 2, 1]);

      expect(longestSubsequenceEndingAt([1, 10, 11, 2, 3, 4, 5, 2, 1])).toEqual(
        [1, 2, 3, 2, 3, 4, 5, 2, 1]
      );
    });
  });

  describe('longestSubsequenceStartingAt', () => {
    it('should return correct', () => {
      // prettier-ignore
      expect(
        longestSubsequenceStartingAt([1, 11, 2, 10, 4, 5, 2, 1])
      ).toEqual([1, 5, 2, 4, 3, 3, 2, 1]);

      expect(
        longestSubsequenceStartingAt([1, 10, 11, 2, 3, 4, 5, 2, 1])
      ).toEqual([1, 4, 4, 2, 3, 3, 3, 2, 1]);
    });
  });

  describe('solveLengthOfLongestSubsequence', () => {
    describe('Example tests', () => {
      it('should return 6 for Example 1 input [1, 11, 2, 10, 4, 5, 2, 1]', () => {
        expect(
          solveLengthOfLongestSubsequence([1, 11, 2, 10, 4, 5, 2, 1])
        ).toEqual(6);
      });
    });

    describe('Correctness tests', () => {
      it('should return 1 for Sample 1 input [1, 2, 3, 4, 3, 2, 1]', () => {
        expect(solveLengthOfLongestSubsequence([1, 2, 3, 4, 1])).toEqual(5);
      });

      it('should return [1, 4, 3, 2, 1] for Sample 2 input [1, 4, 3, 2, 1]', () => {
        expect(solveLengthOfLongestSubsequence([1, 4, 3, 2, 1])).toEqual(5);
      });

      it('should return [1, 2, 1] for Extreme input [1, 2, 1]', () => {
        expect(solveLengthOfLongestSubsequence([1, 2, 1])).toEqual(3);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        solveLengthOfLongestSubsequence(generateArray(100));
      });

      it('should run for Large 1 input of 10e3 items', () => {
        solveLengthOfLongestSubsequence(generateArray(10e3));
      });
    });
  });
});
