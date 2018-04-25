import { element } from './function-challenge-04';

function collect(gen: Function, array: number[]): Function {
  return () => {
    const value = gen();
    if (value !== undefined) {
      array.push(value);
    }

    return value;
  };
}

function filter(gen: Function, pred: Function): Function {
  const rec = (): any => {
    const value = gen();

    if (value === undefined) {
      return undefined;
    }

    return pred(value) ? value : rec();
  };

  return rec;
}

function concat(gen1: Function, gen2: Function): Function {
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

function concatES6(...gens: Function[]): Function {
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
