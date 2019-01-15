import { BinaryFunction } from './function.util';

import { add, mul } from './function-challenge-01';

import { addm, liftm, makeO, ObjectO } from './function-challenge-08';

describe('Function Challenge 08', () => {
  describe('makeO', () => {
    it('should return correctly', () => {
      expect(makeO(1)).toEqual({ value: 1, source: '1' });
      expect(makeO(Math.PI, 'pi')).toEqual({
        source: 'pi',
        value: Math.PI
      });
    });
  });

  describe('addm', () => {
    it('should return correctly', () => {
      expect(addm(makeO(3), makeO(4))).toEqual({
        source: '(3+4)',
        value: 7
      });
      expect(addm(makeO(1), makeO(Math.PI, 'pi'))).toEqual({
        source: '(1+pi)',
        value: Math.PI + 1
      });
    });
  });

  describe('liftm', () => {
    // tslint:disable-next-line
    const addm: BinaryFunction<any, ObjectO> = liftm(add, '+');
    // tslint:disable-next-line
    const mulm: BinaryFunction<any, ObjectO> = liftm(mul, '*');

    it('should return correct', () => {
      expect(addm(makeO(3), makeO(4))).toEqual({
        source: '(3+4)',
        value: 7
      });
      expect(mulm(makeO(3), makeO(4))).toEqual({
        source: '(3*4)',
        value: 12
      });
      expect(addm(3, makeO(4))).toEqual({ value: 7, source: '(3+4)' });
    });
  });
});
