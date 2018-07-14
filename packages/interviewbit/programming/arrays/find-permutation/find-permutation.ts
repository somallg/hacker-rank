/**
 * Interviewbit - FindPermutation
 */

function findPermutation(s: string, n: number): number[] {
  const array = Array(n + 1)
    .fill(0)
    .map((_, index) => index);

  const result: number[] = [];
  let l: number = 1;
  let r: number = n;

  s.split('').forEach(c => {
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
