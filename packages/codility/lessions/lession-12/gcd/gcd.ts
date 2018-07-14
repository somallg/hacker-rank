/**
 * Codility - Gcd
 */

function gcd(a: number, b: number, res: number): number {
  if (a < 1 || b < 1) {
    // tslint:disable:no-else-after-return
    return res;
  } else if (a === b) {
    return res * a;
  } else if ((a & 1) === 0 && (b & 1) === 0) {
    return gcd(a >>> 1, b >>> 1, res << 1);
  } else if ((a & 1) === 0) {
    return gcd(a >>> 1, b, res);
  } else if ((b & 1) === 0) {
    return gcd(a, b >>> 1, res);
  } else if (a > b) {
    return gcd(a - b, b, res);
  } else {
    return gcd(a, b - a, res);
  }
}

export { gcd };
