import { BinaryFunction } from './function.util';

import { liftf } from './function-challenge-01';

const curry = (binary: BinaryFunction<number, number>, first: number) => (
  second: number
) => binary(first, second);

// use liftf to create curry
const curry2 = (binary: BinaryFunction<number, number>, first: number) =>
  liftf(binary)(first);

// ES6 version of curry
const curryES6 = (func: (...args: number[]) => number, ...first: number[]) => (
  ...second: number[]
) => func(...first, ...second);

export { curry, curry2, curryES6 };
