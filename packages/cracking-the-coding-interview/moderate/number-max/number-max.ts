/**
 * NumberMax
 */

function flip(n: number): number {
  return n ^ 1;
}

function sign(n: number): number {
  return n >>> 31;
}

function numberMax(a: number, b: number): number {
  const sa = sign(a);
  const sb = sign(b);
  const sc = flip(sign(a - b));

  const kb = sa ^ sb; // a, b same sign then kb = 0 else 1
  const kc = flip(kb);

  const k = kb * sb + kc * sc;
  const q = flip(k);

  return a * k + b * q;
}

export { numberMax };
