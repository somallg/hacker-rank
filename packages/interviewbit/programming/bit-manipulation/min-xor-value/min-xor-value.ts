/**
 * MinXorValue
 */

function minXorValue(array: number[]): number {
  const l: number = array.length;
  if (l === 0) {
    return 0;
  }

  array.sort((a: number, b: number) => a - b);
  let result: number = Infinity;

  for (let i: number = 0; i < l - 1; i += 1) {
    result = Math.min(result, array[i] ^ array[i + 1]);
  }

  return result;
}

export { minXorValue };
