import { BinaryFunction } from './function.util';

interface ObjectO {
  source: string;
  value: number;
}

function makeO(value: number, source?: string): ObjectO {
  return {
    source: typeof source === 'string' ? source : String(value),
    value
  };
}

function addm(m1: ObjectO, m2: ObjectO): ObjectO {
  return makeO(m1.value + m2.value, `(${m1.source}+${m2.source})`);
}

function liftm(
  binary: BinaryFunction<number, number>,
  op: string
): BinaryFunction<number | ObjectO, ObjectO> {
  return (a: number | ObjectO, b: number | ObjectO): ObjectO => {
    /* tslint:disable:no-parameter-reassignment */
    a = typeof a === 'number' ? makeO(a) : a;
    b = typeof b === 'number' ? makeO(b) : b;

    return makeO(binary(a.value, b.value), `(${a.source}${op}${b.source})`);
  };
}

export { makeO, addm, liftm, ObjectO };
