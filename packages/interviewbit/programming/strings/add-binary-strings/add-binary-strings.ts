/**
 * AddBinaryStrings
 */

function addBinaryStrings(a: string, b: string): string {
  const toBitsA = a.split('').map(Number);
  const toBitsB = b.split('').map(Number);
  const lenA = toBitsA.length;
  const lenB = toBitsB.length;
  if (lenA === 0 && lenB === 0) {
    return '';
  }
  const lenMax = Math.max(lenA, lenB);

  let result = '';
  let carry = 0;

  for (let i = 0; i < lenMax; i = i + 1) {
    const aBit = i >= lenA ? 0 : toBitsA[lenA - i - 1];
    const bBit = i >= lenB ? 0 : toBitsB[lenB - i - 1];
    const sum = (aBit + bBit + carry) % 2;
    carry = (aBit + bBit + carry) >>> 1;
    result = `${sum}${result}`;
  }

  return carry === 0 ? result : `1${result}`;
}

export { addBinaryStrings };
