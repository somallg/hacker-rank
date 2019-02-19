/**
 * BinaryToString
 */

function binaryToString(n: number): string {
  const result: string[] = ['0', '.'];

  if (n < 0 || n > 1) {
    return 'ERROR';
  }

  let fac: number = 0.5;
  while (n > 0) {
    if (n >= fac) {
      result.push('1');
      // tslint:disable-next-line
      n -= fac;
    } else {
      result.push('0');
    }

    fac /= 2;
  }

  return result.join('');
}

export { binaryToString };
