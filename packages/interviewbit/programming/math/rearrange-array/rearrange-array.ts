/**
 * RearrangeArray
 */

function rearrangeArray(array: number[]): number[] {
  const l = array.length;
  if (l <= 1) {
    return array;
  }

  for (let i = 0; i < l; i = i + 1) {
    array[i] = array[i] + (array[array[i]] % l) * l;
  }

  for (let i = 0; i < l; i = i + 1) {
    array[i] = Math.floor(array[i] / l);
  }

  return array;
}

export { rearrangeArray };
