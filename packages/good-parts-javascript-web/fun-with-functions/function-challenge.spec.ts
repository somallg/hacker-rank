import { add, addf, identityf, liftf, mul, sub } from './function-challenge-01';
import { curry } from './function-challenge-02';
import { composeu, doubl, limit, square } from './function-challenge-03';
import { element, from, fromTo, to } from './function-challenge-04';
import { collect, concat, concatES6, filter } from './function-challenge-05';
import { fibonaccif, gensymf, gensymff } from './function-challenge-06';
import { counter, revocable } from './function-challenge-07';
import { addm, liftm, makeO } from './function-challenge-08';
import { exp } from './function-challenge-09';
import {
  addg,
  arrayg,
  arrayg2,
  continuize,
  liftg
} from './function-challenge-10';
import { UnaryFunction } from './function.util';

describe('Function Challenge', () => {
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

  describe('Function Challenge 02', () => {
    describe('curry', () => {
      it('should return 7', () => {
        expect(curry(add, 3)(4)).toEqual(7);
      });

      it('should return 30', () => {
        expect(curry(mul, 5)(6)).toEqual(30);
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
        expect(inc(inc(5))).toEqual(7);
      });
    });
  });

  describe('Function Challenge 03', () => {
    describe('twice: doubl, square', () => {
      it('should return 22', () => {
        expect(doubl(11)).toEqual(22);
      });

      it('should return 121', () => {
        expect(square(11)).toEqual(121);
      });
    });

    describe('composeu', () => {
      it('should return 100', () => {
        expect(composeu(doubl, square)(5)).toEqual(100);
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

  describe('Function Challenge 06', () => {
    describe('gensymf', () => {
      const geng = gensymf('G');
      const genh = gensymf('H');

      describe('geng', () => {
        it('should return G1', () => {
          expect(geng()).toEqual('G1');
        });

        it('should return G2', () => {
          expect(geng()).toEqual('G2');
        });
      });

      describe('genh', () => {
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
      const gensymf = gensymff(inc as UnaryFunction, 0);
      const geng = gensymf('G');
      const genh = gensymf('H');

      describe('geng', () => {
        it('should return G1', () => {
          expect(geng()).toEqual('G1');
        });

        it('should return G2', () => {
          expect(geng()).toEqual('G2');
        });
      });

      describe('genh', () => {
        it('should return H1', () => {
          expect(genh()).toEqual('H1');
        });

        it('should return H2', () => {
          expect(genh()).toEqual('H2');
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

    describe('Function Challenge 07', () => {
      describe('counter', () => {
        const obj = counter(10);
        const up = obj.up;
        const down = obj.down;

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

      describe('counter', () => {
        const rev = revocable(add);
        const addRev = rev.invoke;

        it('should return 7', () => {
          expect(addRev(3, 4)).toEqual(7);
        });

        it('should not be invoked', () => {
          rev.revoke();
          expect(addRev(5, 7)).toEqual(undefined);
        });
      });
    });

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
        const addm = liftm(add, '+');
        const mulm = liftm(mul, '*');

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
    });
  });
});
