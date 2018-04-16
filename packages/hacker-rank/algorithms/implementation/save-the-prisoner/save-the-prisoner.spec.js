/**
 * Test specs for save-the-prisoner problem
 * @url https://www.hackerrank.com/challenges/save-the-prisoner/problem
 */

var { solveSaveThePrisoner } = require('./save-the-prisoner');

describe('SaveThePrisoner', () => {
  describe('solveSaveThePrisoner', () => {
    it('should return 1 when input ', () => {
      expect(solveSaveThePrisoner(1, 1, 1)).toEqual(1);
    });

    it('should return 1 when input ', () => {
      expect(solveSaveThePrisoner(2, 1, 1)).toEqual(1);
    });

    it('should return 2 when input ', () => {
      expect(solveSaveThePrisoner(2, 3, 2)).toEqual(2);
    });

    it('should return 2 when input ', () => {
      expect(solveSaveThePrisoner(5, 2, 1)).toEqual(2);
    });

    it('should return 3 when input ', () => {
      expect(solveSaveThePrisoner(5, 2, 2)).toEqual(3);
    });

    it('should return 112 when input ', () => {
      expect(solveSaveThePrisoner(144, 797951344, 1)).toEqual(112);
    });

    it('should return 1 when input ', () => {
      expect(solveSaveThePrisoner(999999998, 999999999, 1)).toEqual(1);
    });

    it('should return 91 when input ', () => {
      expect(solveSaveThePrisoner(91, 111224659, 1)).toEqual(91);
    });

    it('should return 999999997 when input ', () => {
      expect(solveSaveThePrisoner(999999998, 999999997, 1)).toEqual(999999997);
    });
  });
});
