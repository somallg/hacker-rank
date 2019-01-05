import { add, addf, identityf, liftf, mul, sub } from './function-challenge-01';

describe('Function Challenge 01', () => {
  describe('add', () => {
    it('should return 7', () => {
      expect(add(3, 4)).toEqual(7);
    });
  });

  describe('sub', () => {
    it('should return -1', () => {
      expect(sub(3, 4)).toEqual(-1);
    });
  });

  describe('mul', () => {
    it('should return 12', () => {
      expect(mul(3, 4)).toEqual(12);
    });
  });

  describe('identityf', () => {
    it('should return 3', () => {
      const three = identityf(3);
      expect(three()).toEqual(3);
    });
  });

  describe('addf', () => {
    it('should return 3', () => {
      expect(addf(3)(4)).toEqual(7);
    });
  });

  describe('liftf', () => {
    it('should return 7', () => {
      expect(liftf(add)(3)(4)).toEqual(7);
    });

    it('should return 30', () => {
      expect(liftf(mul)(5)(6)).toEqual(30);
    });
  });
});
