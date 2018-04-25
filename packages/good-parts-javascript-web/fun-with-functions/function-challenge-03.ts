import {
  BinaryFunction,
  TernaryFunction,
  UnaryFunction
} from './function.util';

import { add, mul } from './function-challenge-01';

function twice(binary: BinaryFunction): UnaryFunction {
  return n => binary(n, n);
}

const doubl = twice(add);

const square = twice(mul);

function reverse(binary: BinaryFunction): BinaryFunction {
  return (first, second) => binary(second, first);
}

function reverseES6(func: Function): Function {
  return (...args: number[]) => func(...args.reverse());
}

function composeu(f: UnaryFunction, g: UnaryFunction): UnaryFunction {
  return n => g(f(n));
}

function composeb(f: BinaryFunction, g: BinaryFunction): TernaryFunction {
  return (a, b, c) => g(f(a, b), c);
}

function limit(binary: Function, count: number): Function {
  return (a: number, b: number) => {
    if (count >= 1) {
      count -= 1;
      return binary(a, b);
    }

    return undefined;
  };
}

export { twice, doubl, square, reverse, reverseES6, composeu, composeb, limit };
