/**
 * DivideIntegers
 */

const INT_MAX = 2 ** 31 - 1;

function findMostSignificantBit(a: number, b: number) {
  let shift = 0;

  while (b << shift > 0 && b << shift < a) {
    shift += 1;
  }

  return shift - 1;
}

function divideIntegers(a: number, b: number): number {
  if (b === 0) {
    return INT_MAX;
  } else if (b === 1) {
    return Math.min(a, INT_MAX);
  } else if (a === 0) {
    return 0;
  } else if (b < 0 && a < 0) {
    return divideIntegers(-a, -b);
  } else if (b < 0) {
    return -divideIntegers(a, -b);
  } else if (a < 0) {
    return -divideIntegers(-a, b);
  }

  let result = 0;

  while (b < a) {
    const mostSignificantBit = findMostSignificantBit(a, b);
    result |= 1 << mostSignificantBit;
    a -= b << mostSignificantBit;
  }

  return result;
}

export { divideIntegers };
