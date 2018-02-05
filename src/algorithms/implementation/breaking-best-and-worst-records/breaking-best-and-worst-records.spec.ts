import {
  breakingRecords,
  getHighestandLowestScore
} from './breaking-best-and-worst-records';

describe('Breaking the Records', () => {
  describe('getHighestandLowestScore', () => {
    it('should return correct when input ', () => {
      expect(getHighestandLowestScore([10, 5, 20, 20, 4, 5, 2, 25, 1])).toEqual(
        {
          highestScore: [10, 10, 20, 20, 20, 20, 20, 25, 25],
          lowestScore: [10, 5, 5, 5, 4, 4, 2, 2, 1]
        }
      );
    });
  });

  describe('breakingRecords', () => {
    it('should return [2, 4] when input 10, 5, 20, 20, 4, 5, 2, 25, 1', () => {
      expect(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])).toEqual([2, 4]);
    });

    it('should return [4, 0] when input 3, 4, 21, 36, 10, 28, 35, 5, 24, 42', () => {
      expect(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])).toEqual([
        4,
        0
      ]);
    });

    it('should return [3, 0] when input 0, 9, 3, 10, 2, 20', () => {
      console.log(getHighestandLowestScore([0, 9, 3, 10, 2, 20]));
      expect(breakingRecords([0, 9, 3, 10, 2, 20])).toEqual([3, 0]);
    });
  });
});
