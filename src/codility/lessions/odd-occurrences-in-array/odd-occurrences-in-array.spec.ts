import { solveOddOccurrencesInArray } from './odd-occurrences-in-array';

describe('OddOccurrencesInArray', () => {
  describe('solveOddOccurrencesInArray', () => {
    it('should return 7 input ', () => {
      expect(solveOddOccurrencesInArray([9, 3, 9, 3, 9, 7, 9])).toEqual(7);
    });

    it('should return 1 when input ', () => {
      expect(solveOddOccurrencesInArray([1])).toEqual(1);
    });

    it('should return 2 when input ', () => {
      expect(solveOddOccurrencesInArray([1, 1, 2])).toEqual(2);
    });
  });
});
