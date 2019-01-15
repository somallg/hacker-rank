import { element } from './function-challenge-04';

type GenFn = (a?: number, b?: number) => number | undefined;

function collect(
  gen: () => number | undefined,
  array: number[]
): () => number | undefined {
  return (): number | undefined => {
    const value: number | undefined = gen();
    if (value !== undefined) {
      array.push(value);
    }

    return value;
  };
}

function filter(
  gen: () => number | undefined,
  pred: (n: number) => boolean
): () => number | undefined {
  const rec: () => number | undefined = (): number | undefined => {
    const value: number | undefined = gen();

    if (value === undefined) {
      return undefined;
    }

    return pred(value) ? value : rec();
  };

  return rec;
}

function concat(
  gen1: (a?: number, b?: number) => number | undefined,
  gen2: (a?: number, b?: number) => number | undefined
): () => number | undefined {
  let gen: (a?: number, b?: number) => number | undefined = gen1;

  return (): number | undefined => {
    const value: number | undefined = gen();

    if (value !== undefined) {
      return value;
    }

    gen = gen2;

    return gen();
  };
}

function concatES6(...gens: GenFn[]): () => number | undefined {
  const next: () => GenFn | undefined = element<GenFn>(gens);
  let gen: GenFn | undefined = next();

  const recur: () => number = (): number => {
    const value: number | undefined = (<GenFn>gen)();

    if (value === undefined) {
      gen = next();
      if (gen !== undefined) {
        return recur();
      }
    }

    return <number>value;
  };

  return recur;
}

export { collect, filter, concat, concatES6 };
