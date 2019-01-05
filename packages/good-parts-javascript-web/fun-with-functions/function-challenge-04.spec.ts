import { element, from, fromES6, fromTo, to } from './function-challenge-04';

describe('Function Challenge 04', () => {
  describe('from', () => {
    const index = from(0);

    it('should return 0', () => {
      expect(index()).toEqual(0);
    });

    it('should return 1', () => {
      expect(index()).toEqual(1);
    });

    it('should return 2', () => {
      expect(index()).toEqual(2);
    });
  });

  describe('fromES6', () => {
    const index = fromES6(0);

    it('should return 0', () => {
      expect(index.next().value).toEqual(0);
    });

    it('should return 1', () => {
      expect(index.next().value).toEqual(1);
    });

    it('should return 2', () => {
      expect(index.next().value).toEqual(2);
    });
  });

  describe('to', () => {
    const index = to(from(1), 3);

    it('should return 1', () => {
      expect(index()).toEqual(1);
    });

    it('should return 2', () => {
      expect(index()).toEqual(2);
    });

    it('should return undefined', () => {
      expect(index()).toEqual(undefined);
    });

    it('should return undefined', () => {
      expect(index()).toEqual(undefined);
    });
  });

  describe('fromTo', () => {
    const index = fromTo(0, 3);

    it('should return 0', () => {
      expect(index()).toEqual(0);
    });

    it('should return 1', () => {
      expect(index()).toEqual(1);
    });

    it('should return 2', () => {
      expect(index()).toEqual(2);
    });

    it('should return undefined', () => {
      expect(index()).toEqual(undefined);
    });

    it('should return undefined', () => {
      expect(index()).toEqual(undefined);
    });
  });

  describe('element with generator', () => {
    const ele = element(['a', 'b', 'c', 'd'], fromTo(1, 3));

    it('should return b', () => {
      expect(ele()).toEqual('b');
    });

    it('should return c', () => {
      expect(ele()).toEqual('c');
    });

    it('should return undefined', () => {
      expect(ele()).toEqual(undefined);
    });
  });

  describe('element without generator', () => {
    const ele = element(['a', 'b', 'c', 'd']);

    it('should return a', () => {
      expect(ele()).toEqual('a');
    });

    it('should return b', () => {
      expect(ele()).toEqual('b');
    });

    it('should return c', () => {
      expect(ele()).toEqual('c');
    });

    it('should return d', () => {
      expect(ele()).toEqual('d');
    });

    it('should return undefined', () => {
      expect(ele()).toEqual(undefined);
    });
  });
});
