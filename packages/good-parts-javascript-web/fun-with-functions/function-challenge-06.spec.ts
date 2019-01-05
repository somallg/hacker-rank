import { UnaryFunction } from './function.util';

import { addf } from './function-challenge-01';

import {
  fibonaccif,
  fibonaccif2,
  fibonaccif3,
  gensymf,
  gensymff
} from './function-challenge-06';

describe('Function Challenge 06', () => {
  describe('gensymf', () => {
    const geng = gensymf('G');
    const genh = gensymf('H');

    describe('genG', () => {
      it('should return G1', () => {
        expect(geng()).toEqual('G1');
      });

      it('should return G2', () => {
        expect(geng()).toEqual('G2');
      });
    });

    describe('genH', () => {
      it('should return H1', () => {
        expect(genh()).toEqual('H1');
      });

      it('should return H2', () => {
        expect(genh()).toEqual('H2');
      });
    });
  });

  describe('gensymff', () => {
    const inc = addf(1);
    // tslint:disable-next-line
    const gensymf = gensymff(inc as UnaryFunction<number, number>, 0);
    const genG = gensymf('G');
    const genH = gensymf('H');

    describe('geng', () => {
      it('should return G1', () => {
        expect(genG()).toEqual('G1');
      });

      it('should return G2', () => {
        expect(genG()).toEqual('G2');
      });
    });

    describe('genh', () => {
      it('should return H1', () => {
        expect(genH()).toEqual('H1');
      });

      it('should return H2', () => {
        expect(genH()).toEqual('H2');
      });
    });
  });

  describe('fibonaccif', () => {
    const fib = fibonaccif(0, 1);

    describe('fib', () => {
      it('should return 0', () => {
        expect(fib()).toEqual(0);
      });

      it('should return 1', () => {
        expect(fib()).toEqual(1);
      });

      it('should return 1', () => {
        expect(fib()).toEqual(1);
      });

      it('should return 2', () => {
        expect(fib()).toEqual(2);
      });

      it('should return 3', () => {
        expect(fib()).toEqual(3);
      });

      it('should return 5', () => {
        expect(fib()).toEqual(5);
      });
    });
  });

  describe('fibonaccif2', () => {
    const fib = fibonaccif2(0, 1);

    describe('fib', () => {
      it('should return 0', () => {
        expect(fib()).toEqual(0);
      });

      it('should return 1', () => {
        expect(fib()).toEqual(1);
      });

      it('should return 1', () => {
        expect(fib()).toEqual(1);
      });

      it('should return 2', () => {
        expect(fib()).toEqual(2);
      });

      it('should return 3', () => {
        expect(fib()).toEqual(3);
      });

      it('should return 5', () => {
        expect(fib()).toEqual(5);
      });
    });
  });

  describe('fibonaccif3', () => {
    const fib = fibonaccif3(0, 1);

    describe('fib', () => {
      it('should return 0', () => {
        expect(fib()).toEqual(0);
      });

      it('should return 1', () => {
        expect(fib()).toEqual(1);
      });

      it('should return 1', () => {
        expect(fib()).toEqual(1);
      });

      it('should return 2', () => {
        expect(fib()).toEqual(2);
      });

      it('should return 3', () => {
        expect(fib()).toEqual(3);
      });

      it('should return 5', () => {
        expect(fib()).toEqual(5);
      });
    });
  });
});
