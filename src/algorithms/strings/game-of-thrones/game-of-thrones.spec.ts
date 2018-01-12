import { gameOfThrones } from './game-of-thrones';

describe('Game of Thrones - I', () => {
  describe('gameOfThrones', () => {
    it('should return YES for aaabbbb', () => {
      expect(gameOfThrones('aaabbbb')).toBe('YES');
    });

    it('should return NO for cdefghmnopqrstuvw', () => {
      expect(gameOfThrones('cdefghmnopqrstuvw')).toBe('NO');
    });

    it('should return YES for cdcdcdcdeeeef', () => {
      expect(gameOfThrones('cdcdcdcdeeeef')).toBe('YES');
    });
  });
});
