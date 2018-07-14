/**
 * Test specs for eliza-speak problem
 * @url https://www.rankk.org/challenges/eliza-speak.py
 */

import { getChunks, solveElizaSpeak } from './eliza-speak';

describe('ElizaSpeak', () => {
  describe('getChunks', () => {
    it('should return correctly', () => {
      expect(getChunks(1, 3)).toEqual([[0, 1], [1, 2], [2, 3]]);
      expect(getChunks(2, 6)).toEqual([[0, 2], [2, 4], [4, 6]]);
    });
  });
  describe('solveElizaSpeak', () => {
    it('should return when input ', () => {
      return solveElizaSpeak().then(data => {
        console.log(data); // tslint:disable-line

        expect(data).toMatch('The solution');

        return data;
      });
    });
  });
});
