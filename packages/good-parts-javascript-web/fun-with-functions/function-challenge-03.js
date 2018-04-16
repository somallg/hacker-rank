import { liftf, add, mul } from './function-challenge-01';
import { curry } from './function-challenge-02';

function twice(binary) {
  return function(n) {
    return binary(n, n);
  };
}

const doubl = twice(add);

const square = twice(mul);

function reverse(binary) {
  return function(first, second) {
    return binary(second, first);
  };
}

function reverseES6(func) {
  return function(...args) {
    return func(...args.reverse());
  };
}

function composeu(f, g) {
  return function(n) {
    return g(f(n));
  };
}

function composeb(f, g) {
  return function(a, b, c) {
    return g(f(a, b), c);
  };
}

function limit(binary, count) {
  return function(a, b) {
    if (count >= 1) {
      count -= 1;
      return binary(a, b);
    }

    return undefined;
  };
}

export { twice, doubl, square, reverse, composeu, composeb, limit };
