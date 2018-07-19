/* tslint:disable:no-bitwise */
function gcd(m: number, n: number, res: number): number {
  if (m < 1 || n < 1) {
    return res;
  } else if (m === n) {
    return m * res;
  } else if ((m & 1) === 0 && (n & 1) === 0) {
    return gcd(m >>> 1, n >>> 1, res << 1);
  } else if ((m & 1) === 0) {
    return gcd(m >>> 1, n, res);
  } else if ((n & 1) === 0) {
    return gcd(m, n >>> 1, res);
  } else if (m > n) {
    return gcd(m - n, n, res);
  }

  // n > m here
  return gcd(m, n - m, res);
}

function greatestCommonDivisor(m: number, n: number): number {
  if (m % n === 0) {
    return n;
  }

  if (n % m === 0) {
    return m;
  }

  return gcd(m, n, 1);
}

export { greatestCommonDivisor };
