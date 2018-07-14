/**
 * Test specs for longest-word problem
 */

import { solveLongestWord } from './longest-word';

describe('LongestWord', () => {
  describe('solveLongestWord', () => {
    it('should return when input ', () => {
      expect(solveLongestWord('hello worlds')).toEqual('worlds');
    });

    it('should return when input ', () => {
      expect(solveLongestWord('hello!@#$% worlds!!!')).toEqual('worlds');
    });
  });
});
