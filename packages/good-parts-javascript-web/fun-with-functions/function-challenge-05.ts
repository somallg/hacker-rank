import { element } from './function-challenge-04';

function collect(
  gen: () => number | undefined,
  array: number[]
): () => number | undefined {
  return () => {
    const value = gen();
    if (value !== undefined) {
      array.push(value);
    }

    return value;
  };
}

function filter(
  gen: () => number | undefined,
  pred: (n: number) => boolean
): () => any {
  const rec = (): any => {
    const value = gen();

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
  let gen = gen1;
  return () => {
    const value = gen();

    if (value !== undefined) {
      return value;
    }

    gen = gen2;
    return gen();
  };
}

function concatES6(...gens: Array<() => number | undefined>): () => number {
  const next = element(gens);
  let gen = next();

  const recur = (): number => {
    const value = gen();

    if (value === undefined) {
      gen = next();
      if (gen !== undefined) {
        return recur();
      }
    }

    return value;
  };

  return recur;
}

export { collect, filter, concat, concatES6 };
