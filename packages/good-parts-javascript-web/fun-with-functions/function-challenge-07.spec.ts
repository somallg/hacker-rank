import { add } from './function-challenge-01';

import {
  counter,
  Counter,
  Revocable,
  revocable
} from './function-challenge-07';

describe('Function Challenge 07', () => {
  describe('counter', () => {
    const obj: Counter = counter(10);
    const up: () => number = obj.up;
    const down: () => number = obj.down;

    it('should return 11', () => {
      expect(up()).toEqual(11);
    });

    it('should return 10', () => {
      expect(down()).toEqual(10);
    });

    it('should return 9', () => {
      expect(down()).toEqual(9);
    });

    it('should return 10', () => {
      expect(up()).toEqual(10);
    });
  });

  describe('revocable', () => {
    const rev: Revocable = revocable(add);
    const addRev: (a: number, b: number) => number | undefined = rev.invoke;

    it('should return 7', () => {
      expect(addRev(3, 4)).toEqual(7);
    });

    it('should not be invoked', () => {
      rev.revoke();
      expect(addRev(5, 7)).toEqual(undefined);
    });
  });
});
