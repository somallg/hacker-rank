import { add, mul, sub } from './function-challenge-01';

import {
  composeb,
  composeu,
  doubl,
  limit,
  reverse,
  reverseES6,
  square
} from './function-challenge-03';

describe('Function Challenge 03', () => {
  describe('twice: doubl, square', () => {
    it('should return 22', () => {
      expect(doubl(11)).toEqual(22);
    });

    it('should return 121', () => {
      expect(square(11)).toEqual(121);
    });
  });

  describe('reverse', () => {
    it('should return 1', () => {
      expect(reverse(sub)(3, 4)).toEqual(1);
    });

    it('should return -1', () => {
      expect(reverse(sub)(4, 3)).toEqual(-1);
    });
  });

  describe('reverseES6', () => {
    it('should return 1', () => {
      expect(reverseES6(sub)(3, 4)).toEqual(1);
    });

    it('should return -1', () => {
      expect(reverseES6(sub)(4, 3)).toEqual(-1);
    });
  });

  describe('composeu', () => {
    it('should return 100', () => {
      expect(composeu(doubl, square)(5)).toEqual(100);
    });
  });

  describe('composeb', () => {
    it('should return 100', () => {
      expect(composeb(add, mul)(5, 6, 7)).toEqual(77);
    });
  });

  describe('limit', () => {
    const addLtd = limit(add, 1);
    it('should return y', () => {
      expect(addLtd(3, 4)).toEqual(7);
    });

    it('should return undefined', () => {
      expect(addLtd(3, 5)).toEqual(undefined);
    });
  });
});
