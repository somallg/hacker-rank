import { add, addf, liftf, mul } from './function-challenge-01';

import { curry, curry2, curryES6 } from './function-challenge-02';

describe('Function Challenge 02', () => {
  describe('curry', () => {
    it('should return 7', () => {
      expect(curry(add, 3)(4)).toEqual(7);
    });

    it('should return 30', () => {
      expect(curry(mul, 5)(6)).toEqual(30);
    });
  });

  describe('curry2', () => {
    it('should return 7', () => {
      expect(curry2(add, 3)(4)).toEqual(7);
    });

    it('should return 30', () => {
      expect(curry2(mul, 5)(6)).toEqual(30);
    });
  });

  describe('curryES6', () => {
    it('should return 7', () => {
      expect(curryES6(add, 3)(4)).toEqual(7);
    });

    it('should return 30', () => {
      expect(curryES6(mul, 5)(6)).toEqual(30);
    });
  });

  describe('3 ways to create inc function', () => {
    it('should return 6', () => {
      const inc = addf(1);
      expect(inc(5)).toEqual(6);
      expect(inc(inc(5))).toEqual(7);
    });

    it('should return 6', () => {
      const inc = liftf(add)(1);
      expect(inc(5)).toEqual(6);
      expect(inc(inc(5))).toEqual(7);
    });

    it('should return 6', () => {
      const inc = curry(add, 1);
      expect(inc(5)).toEqual(6);
      expect(inc(inc(5) as number)).toEqual(7);
    });
  });
});
