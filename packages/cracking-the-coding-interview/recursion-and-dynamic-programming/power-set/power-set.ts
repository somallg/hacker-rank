/**
 * PowerSet
 */

function powerSet(array: number[]): number[][] {
  return getSubsets(array, 0, [[]]);
}

function getSubsets(array: number[], n: number, soFar: number[][]): number[][] {
  if (n >= array.length) {
    return soFar;
  }

  // tslint:disable-next-line
  soFar = soFar.concat(
    soFar.map((subset: number[]) => subset.concat(array[n]))
  );

  return getSubsets(array, n + 1, soFar);
}

export { powerSet };
