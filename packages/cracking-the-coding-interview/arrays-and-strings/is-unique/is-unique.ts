/**
 * IsUnique
 */

function isUnique(s: string): boolean {
  const charCodeOfA = 'a'.charCodeAt(0);
  let checker = 0;

  for (let i = 0; i < s.length; i += 1) {
    const val = s.charCodeAt(i) - charCodeOfA;
    if ((checker & (1 << val)) > 0) {
      return false;
    }
    checker |= 1 << val;
  }

  return true;
}

export { isUnique };
