/**
 * Test specs for permutations problem
 * Interviewbit - Permutations
 */

import { permutations } from './permutations';

describe('Interviewbit - Permutations', () => {
  describe('permutations', () => {
    describe('Example tests', () => {
      it('should return for Example 1 input [1, 2, 3]', () => {
        expect(permutations([1, 2, 3])).toEqual([
          [1, 2, 3],
          [1, 3, 2],
          [2, 1, 3],
          [2, 3, 1],
          [3, 1, 2],
          [3, 2, 1]
        ]);
      });
    });

    describe('Correctness tests', () => {
      it('should return for Sample 1 input [1, 2, 3, 4]', () => {
        expect(permutations([1, 2, 3, 4])).toEqual([
          [1, 2, 3, 4],
          [1, 2, 4, 3],
          [1, 3, 2, 4],
          [1, 3, 4, 2],
          [1, 4, 2, 3],
          [1, 4, 3, 2],
          [2, 1, 3, 4],
          [2, 1, 4, 3],
          [2, 3, 1, 4],
          [2, 3, 4, 1],
          [2, 4, 1, 3],
          [2, 4, 3, 1],
          [3, 1, 2, 4],
          [3, 1, 4, 2],
          [3, 2, 1, 4],
          [3, 2, 4, 1],
          [3, 4, 1, 2],
          [3, 4, 2, 1],
          [4, 1, 2, 3],
          [4, 1, 3, 2],
          [4, 2, 1, 3],
          [4, 2, 3, 1],
          [4, 3, 1, 2],
          [4, 3, 2, 1]
        ]);
      });

      it('should return for Sample 2 input [4, 3, 2, 1]', () => {
        expect(permutations([4, 3, 2, 1])).toEqual([
          [1, 2, 3, 4],
          [1, 2, 4, 3],
          [1, 3, 2, 4],
          [1, 3, 4, 2],
          [1, 4, 2, 3],
          [1, 4, 3, 2],
          [2, 1, 3, 4],
          [2, 1, 4, 3],
          [2, 3, 1, 4],
          [2, 3, 4, 1],
          [2, 4, 1, 3],
          [2, 4, 3, 1],
          [3, 1, 2, 4],
          [3, 1, 4, 2],
          [3, 2, 1, 4],
          [3, 2, 4, 1],
          [3, 4, 1, 2],
          [3, 4, 2, 1],
          [4, 1, 2, 3],
          [4, 1, 3, 2],
          [4, 2, 1, 3],
          [4, 2, 3, 1],
          [4, 3, 1, 2],
          [4, 3, 2, 1]
        ]);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium 1 input of 8 items', () => {
        permutations(
          Array(8)
            .fill(0)
            .map((_: number, index: number) => index + 1)
        );
      });
    });
  });
});
