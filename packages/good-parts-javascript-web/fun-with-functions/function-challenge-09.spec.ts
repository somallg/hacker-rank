import { add, mul } from './function-challenge-01';

import { square } from './function-challenge-03';

import { exp } from './function-challenge-09';

describe('Function Challenge 09', () => {
  describe('exp', () => {
    it('should return correctly', () => {
      expect(exp([mul, 5, 11])).toEqual(55);
      expect(exp(42)).toEqual(42);
    });

    it('should return correctly of nested expressions', () => {
      expect(exp([Math.sqrt, [add, [square, 3], [square, 4]]])).toEqual(5);
    });
  });
});
