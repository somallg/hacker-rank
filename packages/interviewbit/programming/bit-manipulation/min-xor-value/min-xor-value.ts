/**
 * MinXorValue
 */

function minXorValue(array: number[]): number {
  const l = array.length;
  if (l === 0) {
    return 0;
  }

  array.sort((a, b) => a - b);
  let result = Infinity;

  for (let i = 0; i < l - 1; i += 1) {
    result = Math.min(result, array[i] ^ array[i + 1]);
  }

  return result;
}

export { minXorValue };
