import { from, element } from './function-challenge-04';
import { concat } from './function-challenge-05';
import { limit } from './function-challenge-03';
import { identityf } from './function-challenge-01';

export function gensymf(symbol) {
  const nb = from(1);
  return function () {
    return symbol + nb();
  };
}

export function gensymff(unary, seed) {
  return function (symbol) {
    let num = seed;
    return function () {
      num = unary(num);
      return symbol + num;
    };
  };
}

export function fibonaccif(first, second) {
  let i = 0;
  return function () {
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
        first = second;
        second = next;
        return next;
    }
  };
}

function fibonaccif2(a, b) {
  return concat(
    concat(limit(identityf(a), 1), limit(identityf(b), 1)),
    function fibo() {
      const next = a + b;
      a = b;
      b = next;

      return next;
    },
  );
}

function fibonacci3(a, b) {
  return concat(element([a, b]), function fibo() {
    const next = a + b;
    a = b;
    b = next;

    return next;
  });
}
