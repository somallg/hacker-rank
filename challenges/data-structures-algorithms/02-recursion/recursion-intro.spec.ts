import {
  recursiveExponent,
  recursiveMultiplier,
  recursiveReverse
} from './recursion-intro';

describe('RecursionIntro', () => {
  describe('recursiveExponent', () => {
    it('should works', () => {
      expect(recursiveExponent(1, 3)).toEqual(1);
      expect(recursiveExponent(2, 3)).toEqual(8);
      expect(recursiveExponent(2, 10)).toEqual(1024);
    });
  });

  describe('recursiveMultiplier', () => {
    it('should works', () => {
      expect(recursiveMultiplier([1, 2, 3], 3)).toEqual([3, 6, 9]);
    });
  });

  describe('recursiveReverse', () => {
    it('should works', () => {
      expect(recursiveReverse([1, 2, 3])).toEqual([3, 2, 1]);
    });
  });
});
