import { solveBirthdayBar } from './the-birthday-bar';

describe('Birthday Chocolate', () => {
  describe('solveBirthdayBar', () => {
    it('should return 2 when input [1, 2, 1, 3, 2] 3 2', () => {
      expect(solveBirthdayBar(5, [1, 2, 1, 3, 2], 3, 2)).toEqual(2);
    });

    it('should return 0 when input [1, 1, 1, 1, 1, 1] 3 2', () => {
      expect(solveBirthdayBar(6, [1, 1, 1, 1, 1, 1], 3, 2)).toEqual(0);
    });

    it('should return 1 when input [4] 4 1', () => {
      expect(solveBirthdayBar(1, [4], 4, 1)).toEqual(1);
    });
  });
});
