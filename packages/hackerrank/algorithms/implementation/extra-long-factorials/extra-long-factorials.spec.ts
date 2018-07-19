/**
 * Test specs for extra-long-factorials problem
 * @url https://www.hackerrank.com/challenges/extra-long-factorials/problem
 */

import {
  addArrayRec,
  mulArray,
  mulNumberArray,
  solveExtraLongFactorials,
  toDigits
} from './extra-long-factorials';

describe('ExtraLongFactorials', () => {
  describe('toDigits', () => {
    it('should return [1] when input 1', () => {
      expect(toDigits(1)).toEqual([1]);
    });

    it('should return [2, 1] when input 12', () => {
      expect(toDigits(12)).toEqual([2, 1]);
    });
  });

  describe('addArrayRec', () => {
    it('should return [4, 6] when input [1, 2], [3, 4]', () => {
      expect(addArrayRec([1, 2], [3, 4])).toEqual([4, 6]);
    });

    it('should return [1, 4, 1] when input [8, 9], [3, 4]', () => {
      expect(addArrayRec([8, 9], [3, 4])).toEqual([1, 4, 1]);
    });
  });

  describe('mulNumberArray', () => {
    it('should return [1]', () => {
      expect(mulNumberArray(1, [1])).toEqual([1]);
    });

    it('should return [2, 4]', () => {
      expect(mulNumberArray(2, [1, 2])).toEqual([2, 4]);
    });

    it('should return [6, 7, 1]', () => {
      expect(mulNumberArray(8, [2, 2])).toEqual([6, 7, 1]);
    });
  });

  describe('mulArray', () => {
    it('should return [3, 0, 9] when input [1, 2], [3, 4]', () => {
      expect(mulArray([1, 2], [3, 4])).toEqual([3, 0, 9]);
    });
  });

  describe('solveExtraLongFactorials', () => {
    it('should return when input 10', () => {
      expect(solveExtraLongFactorials(10)).toEqual('3628800');
    });

    it('should return when input 15', () => {
      expect(solveExtraLongFactorials(15)).toEqual('1307674368000');
    });

    it('should return when input 20', () => {
      expect(solveExtraLongFactorials(20)).toEqual('2432902008176640000');
    });

    it('should return when input 25', () => {
      expect(solveExtraLongFactorials(25)).toEqual(
        '15511210043330985984000000'
      );
    });

    it('should return when input 30', () => {
      expect(solveExtraLongFactorials(30)).toEqual(
        '265252859812191058636308480000000'
      );
    });

    it('should return when input 35', () => {
      expect(solveExtraLongFactorials(35)).toEqual(
        '10333147966386144929666651337523200000000'
      );
    });

    it('should return when input 69', () => {
      expect(solveExtraLongFactorials(69)).toEqual(
        '171122452428141311372468338881272839092270544893520369393648040923257279754140647424000000000000000'
      );
    });

    it('should return when input 99', () => {
      expect(solveExtraLongFactorials(99)).toEqual(
        '933262154439441526816992388562667004907159682643816214685929638952175999932299156089414639761565182862536979208272237582511852109168640000000000000000000000'
      );
    });

    it('should return when input 100', () => {
      expect(solveExtraLongFactorials(100)).toEqual(
        '93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000'
      );
    });
  });
});
