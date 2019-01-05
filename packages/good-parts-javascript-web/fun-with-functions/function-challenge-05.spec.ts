import { fromTo } from './function-challenge-04';

import { collect, concat, concatES6, filter } from './function-challenge-05';

describe('Function Challenge 05', () => {
  describe('collect', () => {
    const array: any[] = [];
    const col = collect(fromTo(0, 2), array);

    it('should return 0', () => {
      expect(col()).toEqual(0);
    });

    it('should return 1', () => {
      expect(col()).toEqual(1);
    });

    it('should return undefined', () => {
      expect(col()).toEqual(undefined);
    });

    it('array should return [0, 1]', () => {
      expect(array).toEqual([0, 1]);
    });
  });

  describe('filter', () => {
    const fil = filter(fromTo(0, 5), (value: number) => value % 3 === 0);

    it('should return 0', () => {
      expect(fil()).toEqual(0);
    });

    it('should return 3', () => {
      expect(fil()).toEqual(3);
    });

    it('should return undefined', () => {
      expect(fil()).toEqual(undefined);
    });
  });

  describe('concat', () => {
    const con = concat(fromTo(0, 3), fromTo(0, 2));

    it('should return 0', () => {
      expect(con()).toEqual(0);
    });

    it('should return 1', () => {
      expect(con()).toEqual(1);
    });

    it('should return 2', () => {
      expect(con()).toEqual(2);
    });

    it('should return 0', () => {
      expect(con()).toEqual(0);
    });

    it('should return 1', () => {
      expect(con()).toEqual(1);
    });
  });

  describe('concatES6', () => {
    const con = concatES6(fromTo(0, 3), fromTo(0, 2));

    it('should return 0', () => {
      expect(con()).toEqual(0);
    });

    it('should return 1', () => {
      expect(con()).toEqual(1);
    });

    it('should return 2', () => {
      expect(con()).toEqual(2);
    });

    it('should return 0', () => {
      expect(con()).toEqual(0);
    });

    it('should return 1', () => {
      expect(con()).toEqual(1);
    });
  });
});
