/**
 * CheckPermutation
 */

function checkPermutation(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const letter: number[] = [];

  s.split('')
    .map(c => c.charCodeAt(0) - 'a'.charCodeAt(0))
    .forEach(charCode => {
      const count = letter[charCode] || 0;
      letter[charCode] = count + 1;
    });

  const charcodeOfT = t.split('').map(c => c.charCodeAt(0) - 'a'.charCodeAt(0));

  for (const c of charcodeOfT) {
    const count = letter[c] || 0;
    letter[c] = count - 1;

    if (count - 1 < 0) {
      return false;
    }
  }

  return true;
}

export { checkPermutation };
