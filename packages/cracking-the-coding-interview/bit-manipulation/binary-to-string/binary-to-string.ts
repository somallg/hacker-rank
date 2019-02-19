/**
 * BinaryToString
 */

function binaryToString(n: number): string {
  const result: string[] = ['0', '.'];

  if (n < 0 || n > 1) {
    return 'ERROR';
  }

  while (n > 0) {
    const r: number = n * 2;

    if (r >= 1) {
      result.push('1');
      // tslint:disable-next-line
      n = r - 1;
    } else {
      result.push('0');
      // tslint:disable-next-line
      n = r;
    }
  }

  return result.join('');
}

export { binaryToString };
