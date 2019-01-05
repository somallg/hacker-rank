import { UnaryFunction } from './function.util';

import { identityf } from './function-challenge-01';

import { limit } from './function-challenge-03';

import { element, from } from './function-challenge-04';

import { concat } from './function-challenge-05';

function gensymf(symbol: string): () => string {
  const nb = from(1);
  return () => symbol + nb();
}

function gensymff(
  unary: UnaryFunction<number, number>,
  seed: number
): (s: string) => () => string {
  return (symbol: string) => {
    let num = seed;
    return () => {
      num = unary(num) || 0;
      return symbol + num;
    };
  };
}

function fibonaccif(first: number, second: number): () => number {
  let i = 0;
  return () => {
    let next;

    switch (i) {
      case 0:
        i = 1;
        return first;
      case 1:
        i = 2;
        return second;

      default:
        next = first + second;
        /* tslint:disable:no-parameter-reassignment */
        first = second;
        second = next;
        return next;
    }
  };
}

function fibonaccif2(a: number, b: number): () => number | undefined {
  return concat(concat(limit(identityf(a), 1), limit(identityf(b), 1)), () => {
    const next = a + b;
    /* tslint:disable:no-parameter-reassignment */
    a = b;
    b = next;

    return next;
  });
}

function fibonaccif3(a: number, b: number) {
  return concat(element([a, b]), () => {
    const next = a + b;
    a = b;
    b = next;

    return next;
  });
}

export { gensymf, gensymff, fibonaccif, fibonaccif2, fibonaccif3 };
