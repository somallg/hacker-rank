import { liftf, add, mul } from './function-challenge-01';
import { curry } from './function-challenge-02';

export function twice(binary) {
  return function (n) {
    return binary(n, n);
  };
}

export const doubl = twice(add);

export const square = twice(mul);

export function reverse(binary) {
  return function (first, second) {
    return binary(second, first);
  };
}

function reverseES6(func) {
  return function (...args) {
    return func(...args.reverse());
  };
}

export function composeu(f, g) {
  return function (n) {
    return g(f(n));
  };
}

export function composeb(f, g) {
  return function (a, b, c) {
    return g(f(a, b), c);
  };
}

export function limit(binary, count) {
  return function (a, b) {
    if (count >= 1) {
      count -= 1;
      return binary(a, b);
    }

    return undefined;
  };
}
