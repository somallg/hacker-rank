interface ObjectO {
  source: string;
  value: number;
}

function makeO(value: number, source?: string) {
  return {
    value,
    source: typeof source === 'string' ? source : String(value)
  };
}

function addm(m1: ObjectO, m2: ObjectO) {
  return makeO(m1.value + m2.value, `(${m1.source}+${m2.source})`);
}

function liftm(binary: Function, op: string): Function {
  return (a: any, b: any) => {
    /* tslint:disable:no-parameter-reassignment */
    a = typeof a === 'number' ? makeO(a) : a;
    b = typeof b === 'number' ? makeO(b) : b;
    return makeO(binary(a.value, b.value), `(${a.source}${op}${b.source})`);
  };
}

export { makeO, addm, liftm };
