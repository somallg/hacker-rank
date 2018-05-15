import { pascalize } from '../utils/string.util';

function specSource(problem: string): string {
  return `/**
 * Test specs for ${problem} problem
 * @url https://www.hackerrank.com/challenges/${problem}/problem
 */

import { solve${pascalize(problem)} } from './${problem}';

describe('${pascalize(problem)}', () => {
  describe('solve${pascalize(problem)}', () => {
    it('should return for Extreme Simple input [1]', () => {
      expect(solve${pascalize(problem)}([1])).toEqual(0);
    });

    it('should return for Duplicates input [2, 2]', () => {
      expect(solve${pascalize(problem)}([2, 2])).toEqual(0);
    });

    it('should return for Extreme Double input [2, 1]', () => {
      expect(solve${pascalize(problem)}([2, 1])).toEqual(1);
    });

    it('should return for No Intersections input [0, 0]', () => {
      expect(solve${pascalize(problem)}([0, 0])).toEqual(0);
    });

    it('should return 11 for Example input [1, 5, 2, 1, 4, 0]', () => {
      expect(solve${pascalize(problem)}([1, 5, 2, 1, 4, 0])).toEqual(11);
    });

    it('should return 11 for Sample input [1, 2, 3, 4]', () => {
      expect(solve${pascalize(problem)}([1, 2, 3, 4])).toEqual(6);
    });

    it('should run for Large input 50E3 items', () => {
      solve${pascalize(problem)}(generateArray(50E3));
    }, 950);

    it('should run for Extra Large input 100E3 items', () => {
      solve${pascalize(problem)}(generateArray(100E3));
    }, 950);
  });
});
`;
}

export { specSource };
