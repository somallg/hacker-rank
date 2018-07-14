import { getNextMultiOf5, solveGrading } from './grading';

describe('Grading Students', () => {
  describe('solveGrading', () => {
    it('should return correct when input [73, 67, 38, 33]', () => {
      expect(solveGrading([73, 67, 38, 33])).toEqual([75, 67, 40, 33]);
    });
  });

  describe('getNextMultiOf5', () => {
    it('should return 40 when input 38', () => {
      expect(getNextMultiOf5(38)).toBe(40);
    });

    it('should return 5 when input 1', () => {
      expect(getNextMultiOf5(1)).toBe(5);
    });
  });
});
