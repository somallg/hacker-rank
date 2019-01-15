/**
 * AddBinaryStrings
 */

function addBinaryStrings(a: string, b: string): string {
  const toBitsA: number[] = a.split('').map(Number);
  const toBitsB: number[] = b.split('').map(Number);
  const lenA: number = toBitsA.length;
  const lenB: number = toBitsB.length;
  if (lenA === 0 && lenB === 0) {
    return '';
  }
  const lenMax: number = Math.max(lenA, lenB);

  let result: string = '';
  let carry: number = 0;

  for (let i: number = 0; i < lenMax; i = i + 1) {
    const aBit: number = i >= lenA ? 0 : toBitsA[lenA - i - 1];
    const bBit: number = i >= lenB ? 0 : toBitsB[lenB - i - 1];
    const sum: number = (aBit + bBit + carry) % 2;
    carry = (aBit + bBit + carry) >>> 1;
    result = `${sum}${result}`;
  }

  return carry === 0 ? result : `1${result}`;
}

export { addBinaryStrings };
