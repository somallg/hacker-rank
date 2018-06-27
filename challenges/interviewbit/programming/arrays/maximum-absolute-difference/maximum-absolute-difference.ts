/**
 * Interviewbit - MaximumAbsoluteDifference
 */

function maximumAbsoluteDifference(array: number[]): number {
  const l = array.length;
  if (l <= 1) {
    return 0;
  }

  const arrayPlusIndex = array.map((a, i) => a + i + 1);
  const arrayMinusIndex = array.map((a, i) => a - i - 1);

  const maxArrayPlusIndex = arrayPlusIndex.reduce((acc, a) => Math.max(acc, a));
  const minArrayPlusIndex = arrayPlusIndex.reduce((acc, a) => Math.min(acc, a));

  const maxArrayMinusIndex = arrayMinusIndex.reduce((acc, a) =>
    Math.max(acc, a)
  );
  const minArrayMinusIndex = arrayMinusIndex.reduce((acc, a) =>
    Math.min(acc, a)
  );

  return Math.max(
    maxArrayPlusIndex - minArrayPlusIndex,
    maxArrayMinusIndex - minArrayMinusIndex
  );
}

export { maximumAbsoluteDifference };
