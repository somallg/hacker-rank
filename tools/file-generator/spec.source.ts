import { pascalize } from '../utils';

export const specSource: (problem: string) => string = (
  problem: string
): string => `/**
 * Test specs for ${problem} problem
 * @url https://www.hackerrank.com/challenges/${problem}/problem
 */

import { solve${pascalize(problem)} } from './${problem}';

describe('${pascalize(problem)}', () => {
  describe('solve${pascalize(problem)}', () => {
    it('should return correct when input ', () => {
      expect().toEqual();
    });
    it('should return incorrect when input ', () => {
      expect().toEqual();
    });
  });

  describe('', () => {
    it('should return correct when input ', () => {
      expect().toEqual();
    });
    it('should return incorrect when input ', () => {
      expect().toEqual();
    });
  });
});
`;
