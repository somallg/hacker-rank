/**
 * Interviewbit - MaximumAbsoluteDifference
 */

function maximumAbsoluteDifference(array: number[]): number {
  const l: number = array.length;
  if (l <= 1) {
    return 0;
  }

  const arrayPlusIndex: number[] = array.map(
    (a: number, i: number) => a + i + 1
  );
  const arrayMinusIndex: number[] = array.map(
    (a: number, i: number) => a - i - 1
  );

  const maxArrayPlusIndex: number = arrayPlusIndex.reduce(
    (acc: number, a: number) => Math.max(acc, a)
  );
  const minArrayPlusIndex: number = arrayPlusIndex.reduce(
    (acc: number, a: number) => Math.min(acc, a)
  );

  const maxArrayMinusIndex: number = arrayMinusIndex.reduce(
    (acc: number, a: number) => Math.max(acc, a)
  );
  const minArrayMinusIndex: number = arrayMinusIndex.reduce(
    (acc: number, a: number) => Math.min(acc, a)
  );

  return Math.max(
    maxArrayPlusIndex - minArrayPlusIndex,
    maxArrayMinusIndex - minArrayMinusIndex
  );
}

export { maximumAbsoluteDifference };
