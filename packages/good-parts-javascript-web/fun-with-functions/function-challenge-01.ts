import { BinaryFunction } from './function.util';

function add(first: number, second: number): number {
  return first + second;
}

function sub(first: number, second: number): number {
  return first - second;
}

function mul(first: number, second: number): number {
  return first * second;
}

function identityf(n: number): () => number {
  return () => n;
}

function addf(first: number): (n: number) => number {
  return (second: number): number => first + second;
}

function liftf(
  binary: BinaryFunction<number, number>
): (n: number) => (m: number) => number {
  return (first: number) => (second: number) => binary(first, second);
}

export { add, sub, mul, identityf, addf, liftf };
