import { BinaryFunction } from './function.util';

import { liftf } from './function-challenge-01';

type CurryFn = (
  binary: BinaryFunction<number, number>,
  first: number
) => CurriedFn;

type CurriedFn = (second: number) => number;

const curry: CurryFn = (
  binary: BinaryFunction<number, number>,
  first: number
): CurriedFn => (second: number): number => binary(first, second);

// use liftf to create curry
const curry2: CurryFn = (
  binary: BinaryFunction<number, number>,
  first: number
): CurriedFn => liftf(binary)(first);

// ES6 version of curry
const curryES6: CurryFn = (
  func: (...args: number[]) => number,
  ...first: number[]
): CurriedFn => (...second: number[]): number => func(...first, ...second);

export { curry, curry2, curryES6 };
