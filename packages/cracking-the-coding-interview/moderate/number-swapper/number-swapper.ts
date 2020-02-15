/**
 * NumberSwapper
 */

function numberSwapper(a: number, b: number): [number, number] {
  // tslint:disable
  a = a ^ b;
  b = a ^ b;
  a = b ^ a;

  return [a, b];
}

export { numberSwapper };
