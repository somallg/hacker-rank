/**
 * Test specs for letter-phone problem
 * Interviewbit - LetterPhone
 */

import { generateArray } from '@challenges/util';

import { letterPhone } from './letter-phone';

describe('Interviewbit - LetterPhone', () => {
  describe('letterPhone', () => {
    describe('Example tests', () => {
      it('should return for Example 1 input 23', () => {
        expect(letterPhone('23')).toEqual([
          'ad',
          'ae',
          'af',
          'bd',
          'be',
          'bf',
          'cd',
          'ce',
          'cf'
        ]);
      });
    });

    describe('Correctness tests', () => {
      it('should return for Sample 1 input 2', () => {
        expect(letterPhone('2')).toEqual(['a', 'b', 'c']);
      });

      it('should return for Extreme empty input', () => {
        expect(letterPhone('')).toEqual(['']);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 10 items', () => {
        letterPhone(generateArray(10, 10).join(''));
      });
    });
  });
});
