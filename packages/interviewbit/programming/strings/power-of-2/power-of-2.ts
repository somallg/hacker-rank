/**
 * PowerOf2
 */

function isOdd(n: string): boolean {
  return Number(n[n.length - 1]) % 2 !== 0;
}

function divOf2(n: string): string {
  let result: string = '';
  let carry: number = 0;

  for (let i: number = 0; i < n.length; i += 1) {
    let current: number = carry * 10 + Number(n[i]);
    carry = current % 2;
    current = current >>> 1;
    if (i === 0 && current === 0) {
      continue;
    }
    result = `${result}${current}`;
  }

  return result;
}

function powerOf2(n: string): number {
  if (n === '0' || n === '1') {
    return 0;
  }

  while (n.length > 0) {
    if (isOdd(n) && n !== '1') {
      return 0;
    }
    // tslint:disable-next-line
    n = divOf2(n);
  }

  return 1;
}

export { powerOf2 };
