function makeO(value, source) {
  return {
    value,
    source: typeof source === 'string' ? source : String(value)
  };
}

function addm(m1, m2) {
  return makeO(m1.value + m2.value, `(${m1.source}+${m2.source})`);
}

function liftm(binary, op) {
  return function(a, b) {
    a = typeof a === 'number' ? makeO(a) : a;
    b = typeof b === 'number' ? makeO(b) : b;
    return makeO(binary(a.value, b.value), `(${a.source}${op}${b.source})`);
  };
}

export { makeO, addm, liftm };
