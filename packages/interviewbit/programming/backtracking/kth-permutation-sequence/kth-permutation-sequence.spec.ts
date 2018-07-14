/**
 * Test specs for kth-permutation-sequence problem
 * Interviewbit - KthPermutationSequence
 */

import { kthPermutationSequence } from './kth-permutation-sequence';

describe('Interviewbit - KthPermutationSequence', () => {
  describe('kthPermutationSequence', () => {
    describe('Example tests', () => {
      it('should return 231 for Example 1 input 3, 4', () => {
        expect(kthPermutationSequence(3, 4)).toEqual('231');
      });

      it('should return 321 for Example 2 input 3 6', () => {
        expect(kthPermutationSequence(3, 6)).toEqual('321');
      });
    });

    describe('Correctness tests', () => {
      it('should return 1 for Sample 1 input 1, 1', () => {
        expect(kthPermutationSequence(1, 1)).toEqual('1');
      });

      it('should return 1342 for Sample 2 input 4, 4', () => {
        expect(kthPermutationSequence(4, 4)).toEqual('1342');
      });

      it('should return 1234567891011 for Sample 3 input 11, 1', () => {
        expect(kthPermutationSequence(11, 1)).toEqual('1234567891011');
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 100 items', () => {
        kthPermutationSequence(10, 100);
      });
    });
  });
});
