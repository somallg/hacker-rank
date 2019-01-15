/**
 * CheckPermutation
 */

function checkPermutation(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const letter: number[] = [];

  getCharCode(s).forEach((charCode: number) => {
    const count: number = letter[charCode] || 0;
    letter[charCode] = count + 1;
  });

  const charCodeOfT: number[] = getCharCode(t);

  for (const c of charCodeOfT) {
    const count: number = letter[c] || 0;
    letter[c] = count - 1;

    if (count - 1 < 0) {
      return false;
    }
  }

  return true;
}

function getCharCode(str: string): number[] {
  return str.split('').map((c: string) => c.charCodeAt(0) - 'a'.charCodeAt(0));
}

export { checkPermutation };
