/**
 * Interviewbit - BinaryRepresentation
 */

function binaryRepresentation(n: number): string {
  if (n === 0) {
    return '0';
  }

  let result: string = '';

  while (n > 0) {
    result = `${n % 2}${result}`;
    // tslint:disable-next-line
    n = n >>> 1;
  }

  return result;
}

export { binaryRepresentation };
