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

function powerSetBinary(array: number[]): number[][] {
  const n: number = array.length;
  const result: number[][] = [];

  for (let i: number = 0; i < 2 ** n; i += 1) {
    result.push(convertToSubset(array, i));
  }

  return result;
}

function convertToSubset(array: number[], b: number): number[] {
  const subset: number[] = [];
  let index: number = 0;

  while (b > 0) {
    if (b & 1) {
      subset.push(array[index]);
    }

    index += 1;
    // tslint:disable-next-line
    b >>= 1;
  }

  return subset;
}

export { powerSet, powerSetBinary };
