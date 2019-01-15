/**
 * Interviewbit - FindPermutation
 */

function findPermutation(s: string, n: number): number[] {
  const array: number[] = Array(n + 1)
    .fill(0)
    .map((_: number, index: number) => index);

  const result: number[] = [];
  let l: number = 1;
  let r: number = n;

  s.split('').forEach((c: string) => {
    if (c === 'D') {
      result.push(array[r]);
      r = r - 1;
    } else {
      result.push(array[l]);
      l = l + 1;
    }
  });

  result.push(array[l]);

  return result;
}

export { findPermutation };
