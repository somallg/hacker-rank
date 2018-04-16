import { element } from './function-challenge-04';

function collect(gen, array) {
  return function() {
    const value = gen();
    if (value !== undefined) {
      array.push(value);
    }

    return value;
  };
}

function filter(gen, pred) {
  return function rec() {
    const value = gen();

    if (value === undefined) {
      return undefined;
    }

    return pred(value) ? value : rec();
  };
}

function concat(gen1, gen2) {
  let gen = gen1;
  return function() {
    const value = gen();

    if (value !== undefined) {
      return value;
    }

    gen = gen2;
    return gen();
  };
}

function concatES6(...gens) {
  const next = element(gens);
  let gen = next();

  return function recur() {
    const value = gen();

    if (value === undefined) {
      gen = next();
      if (gen !== undefined) {
        return recur();
      }
    }

    return value;
  };
}

export { collect, filter, concat, concatES6 };
