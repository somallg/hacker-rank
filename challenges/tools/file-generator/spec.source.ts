import { pascalize } from '../utils/string.util';

function specSource(problem: string): string {
  return `/**
 * Test specs for ${problem} problem
 * @url https://www.hackerrank.com/challenges/${problem}/problem
 */

import { generateArray } from '@challenges/util';

import { solve${pascalize(problem)} } from './${problem}';

describe('${pascalize(problem)}', () => {
  describe('solve${pascalize(problem)}', () => {
    describe('Example tests', () => {
      it('should return _ for Example 1 input []', () => {
        expect(solve${pascalize(problem)}([])).toEqual(_);
      });

      it('should return _ for Example 2 input []', () => {
        expect(solve${pascalize(problem)}([])).toEqual(_);
      });
    });

    describe('Correctness tests', () => {
      it('should return _ for Extreme Empty input []', () => {
        expect(solve${pascalize(problem)}([])).toEqual(_);
      });

      it('should return _ for Extreme Simple input [1]', () => {
        expect(solve${pascalize(problem)}([1])).toEqual(_);
      });

      it('should return _ for Duplicates input [2, 2]', () => {
        expect(solve${pascalize(problem)}([2, 2])).toEqual(_);
      });

      it('should return _ for Extreme Double input [2, 1]', () => {
        expect(solve${pascalize(problem)}([2, 1])).toEqual(_);
      });

      it('should return _ for No Intersections input [0, 0]', () => {
        expect(solve${pascalize(problem)}([0, 0])).toEqual(_);
      });

      it('should return _ for Sample input [1, 2, 3, 4]', () => {
        expect(solve${pascalize(problem)}([1, 2, 3, 4])).toEqual(_);
      });

      it('should return _ for Sample input [4, 3, 2, 1]', () => {
        expect(solve${pascalize(problem)}([4, 3, 2, 1])).toEqual(_);
      });
    });

    describe('Performance tests', () => {
      it('should run for Medium input of 100 items', () => {
        solve${pascalize(problem)}(generateArray(100));
      }, 100);

      it('should run for Large 1 input of 10E3 items', () => {
        solve${pascalize(problem)}(generateArray(10E3));
      }, 100);

      it('should run for Large 2 input of 50E3 items', () => {
        solve${pascalize(problem)}(generateArray(50E3));
      }, 100);

      it('should run for Large 3 input of 100E3 items', () => {
        solve${pascalize(problem)}(generateArray(100E3));
      }, 100);
    });
  });
});
`;
}

export { specSource };
