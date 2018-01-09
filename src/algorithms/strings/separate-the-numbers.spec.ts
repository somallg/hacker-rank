import { canSeparateNumbers } from './separate-the-numbers';

describe('separateNumbers', () => {
  describe('canSeparateNumbers', () => {
    it('should return correct when length is 1', () => {
      const res = canSeparateNumbers([], '123', 1);

      expect(res.length).toBe(2);
      expect(res[0]).toBe(1);

      expect(4).toBe(4);

      alert('Test');
    });
  });
});
