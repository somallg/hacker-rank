import { BinaryFunction } from './function.util';

interface ObjectO {
  source: string;
  value: number;
}

function makeO(value: number, source?: string) {
  return {
    source: typeof source === 'string' ? source : String(value),
    value
  };
}

function addm(m1: ObjectO, m2: ObjectO) {
  return makeO(m1.value + m2.value, `(${m1.source}+${m2.source})`);
}

function liftm(
  binary: BinaryFunction<any, any>,
  op: string
): BinaryFunction<any, ObjectO> {
  return (a: any, b: any) => {
    /* tslint:disable:no-parameter-reassignment */
    a = typeof a === 'number' ? makeO(a) : a;
    b = typeof b === 'number' ? makeO(b) : b;
    return makeO(binary(a.value, b.value), `(${a.source}${op}${b.source})`);
  };
}

export { makeO, addm, liftm };
