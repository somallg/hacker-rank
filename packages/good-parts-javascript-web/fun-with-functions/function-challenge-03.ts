import {
  BinaryFunction,
  TernaryFunction,
  UnaryFunction
} from './function.util';

import { add, mul } from './function-challenge-01';

function twice(
  binary: BinaryFunction<number, number>
): UnaryFunction<number, number> {
  return n => binary(n, n);
}

const doubl = twice(add);

const square = twice(mul);

function reverse(
  binary: BinaryFunction<number, number>
): BinaryFunction<number, number> {
  return (first, second) => binary(second, first);
}

function reverseES6(
  func: (...args: number[]) => number
): (...args: number[]) => number {
  return (...args: number[]) => func(...args.reverse());
}

function composeu(
  f: UnaryFunction<number, number>,
  g: UnaryFunction<number, number>
): UnaryFunction<number, number> {
  return n => g(f(n));
}

function composeb(
  f: BinaryFunction<number, number>,
  g: BinaryFunction<number, number>
): TernaryFunction<number, number> {
  return (a, b, c) => g(f(a, b), c);
}

function limit(
  binary: BinaryFunction<number, number>,
  count: number
): (a: number, b: number) => number | undefined {
  return (a: number, b: number) => {
    if (count >= 1) {
      /* tslint:disable:no-parameter-reassignment */
      count = count - 1;
      return binary(a, b);
    }

    return undefined;
  };
}

export { twice, doubl, square, reverse, reverseES6, composeu, composeb, limit };
