/**
 * IsUnique
 */

function isUnique(s: string): boolean {
  const charCodeOfA: number = 'a'.charCodeAt(0);
  let checker: number = 0;

  for (let i: number = 0; i < s.length; i += 1) {
    const val: number = s.charCodeAt(i) - charCodeOfA;
    if ((checker & (1 << val)) > 0) {
      return false;
    }
    checker |= 1 << val;
  }

  return true;
}

export { isUnique };
