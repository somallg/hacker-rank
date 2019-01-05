import { mul } from './function-challenge-01';

import {
  addg,
  arrayg,
  arrayg2,
  continuize,
  continuizeES6,
  liftg
} from './function-challenge-10';

describe('Function Challenge 10', () => {
  describe('addg', () => {
    it('should return undefined', () => {
      expect(addg()()).toEqual(undefined);
    });

    it('should return 2', () => {
      expect(addg(2)()).toEqual(2);
    });

    it('should return 9', () => {
      expect(addg(2)(7)()).toEqual(9);
    });

    it('should return 7', () => {
      expect(addg(3)(0)(4)()).toEqual(7);
    });

    it('should return 15', () => {
      expect(addg(1)(2)(4)(8)()).toEqual(15);
    });
  });

  describe('liftg', () => {
    it('should return undefined', () => {
      expect(liftg(mul)()).toEqual(undefined);
    });

    it('should return 3', () => {
      expect(liftg(mul)(3)()).toEqual(3);
    });

    it('should return 0', () => {
      expect(liftg(mul)(3)(0)(4)()).toEqual(0);
    });

    it('should return 64', () => {
      expect(liftg(mul)(1)(2)(4)(8)()).toEqual(64);
    });
  });

  describe('arrayg', () => {
    it('should return []', () => {
      expect(arrayg()()).toEqual([]);
    });

    it('should return [3]', () => {
      expect(arrayg(3)()()).toEqual([3]);
    });

    it('should return [3, 4, 5]', () => {
      expect(arrayg(3)(4)(5)()()).toEqual([3, 4, 5]);
    });
  });

  describe('arrayg2', () => {
    it('should return []', () => {
      expect(arrayg2()()).toEqual([]);
    });

    it('should return [3]', () => {
      expect(arrayg2(3)()).toEqual([3]);
    });

    it('should return [3, 4, 5]', () => {
      expect(arrayg2(3)(4)(5)()).toEqual([3, 4, 5]);
    });
  });

  describe('continuize', () => {
    it('should print 9', () => {
      const sqrtc = continuize(Math.sqrt);
      sqrtc(console.log, 81);
    });
  });

  describe('continuizeES6', () => {
    it('should print 9', () => {
      const sqrtc = continuizeES6(Math.sqrt);
      sqrtc(console.log, 81);
    });
  });
});
