/**
 * RecursiveMultiply
 */

function recursiveMultiply(a: number, b: number): number {
  if (a === 1) {
    return b;
  } else if (a === 0) {
    return 0;
  }

  const half: number = a >>> 1;
  const halfProduct: number = recursiveMultiply(half, b);

  return a % 2 === 0
    ? halfProduct + halfProduct
    : halfProduct + halfProduct + b;
}

export { recursiveMultiply };
