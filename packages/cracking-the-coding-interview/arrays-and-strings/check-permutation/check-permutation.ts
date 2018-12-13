/**
 * CheckPermutation
 */

function sortString(s: string): string {
  return s
    .split('')
    .sort()
    .join();
}

function checkPermutation(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  return sortString(s) === sortString(t);
}

export { checkPermutation };
