import { gemstones } from './gem-stones';

describe('Gemstones', () => {

  describe('gemstones', () => {
    it('should return 2', () => {
      expect(gemstones(['abcdde', 'baccd', 'eeabg'])).toBe(2);
    });
  });
});
