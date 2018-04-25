import { BinaryFunction } from './function.util';

import { liftf } from './function-challenge-01';

const curry = (binary: BinaryFunction, first: number) => (second: number) =>
  binary(first, second);

const curry2 = (binary: BinaryFunction, first: number) => liftf(binary)(first);

// ES6
const curryES6 = (func: Function, ...first: number[]) => (
  ...second: number[]
) => func(...first, ...second);

export { curry, curry2, curryES6 };
