/**
 * Test specs for palindrome-partitioning problem
 * Interviewbit - PalindromePartitioning
 */

import { generateArray } from '@challenges/util';

import { palindromePartitioning } from './palindrome-partitioning';

describe('Interviewbit - PalindromePartitioning', () => {
  describe('palindromePartitioning', () => {
    describe('Example tests', () => {
      it('should return for Example 1 input aab', () => {
        expect(palindromePartitioning('aab')).toEqual([
          ['a', 'a', 'b'],
          ['aa', 'b']
        ]);
      });

      it('should return for Example 2 input aabbc', () => {
        expect(palindromePartitioning('aabbc')).toEqual([
          ['a', 'a', 'b', 'b', 'c'],
          ['a', 'a', 'bb', 'c'],
          ['aa', 'b', 'b', 'c'],
          ['aa', 'bb', 'c']
        ]);
      });

      it('should return for Example 3 input aabac', () => {
        expect(palindromePartitioning('aabac')).toEqual([
          ['a', 'a', 'b', 'a', 'c'],
          ['a', 'aba', 'c'],
          ['aa', 'b', 'a', 'c']
        ]);
      });
    });

    describe('Correctness tests', () => {
      it('should return [a] for Sample 1 input a', () => {
        expect(palindromePartitioning('a')).toEqual([['a']]);
      });

      it('should return [a, b] for Sample 2 input ab', () => {
        expect(palindromePartitioning('ab')).toEqual([['a', 'b']]);
      });

      it('should return [[]] for Extreme empty input', () => {
        expect(palindromePartitioning('')).toEqual([[]]);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 10 items', () => {
        palindromePartitioning(generateArray(10).join(''));
      });
    });
  });
});
