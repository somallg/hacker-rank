/**
 * RomanToInteger
 */

function getDecimal(r: string): number {
  // tslint:disable:object-literal-sort-keys
  return {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }[r];
}

function romanToInteger(s: string): number {
  const l: number = s.length;
  let result: number = 0;

  for (let i: number = 0; i < l; i = i + 1) {
    if (i < l - 1 && getDecimal(s[i]) < getDecimal(s[i + 1])) {
      result = result - getDecimal(s[i]);
    } else {
      result = result + getDecimal(s[i]);
    }
  }

  return result;
}

export { romanToInteger };
