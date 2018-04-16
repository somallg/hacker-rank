/**
 * @url: https://www.hackerrank.com/challenges/separate-the-numbers/problem
 */

export function separateNumbers(s: string): string {
  // Complete this function
  let res: string[] = [];
  let l: number = 1;

  while (l <= s.length / 2) {
    res = res.concat(canSeparateNumbers([], s, l));
    l = l + 1;
  }

  res = res.filter((r: string) => r !== '-1');

  if (res && res.length > 0) {
    return `YES ${res.reduce(
      (acc: string, e: string) => (acc.length < e.length || acc < e ? acc : e)
    )}`;
  }

  return 'NO';
}

function canSeparateNumbers(
  acc: string[],
  s: string,
  length: number
): string[] {
  if (s.length === 0 || s.length <= length) {
    return acc;
  }

  const current: string = s.substr(0, length);
  const expectNext: string = addOne(current);
  const actualNext: string = s.substr(
    current.length,
    expectNext.toString().length
  );

  if (expectNext !== actualNext || current[0] === '0') {
    return ['-1'];
  }

  return canSeparateNumbers(
    acc.concat(current),
    s.substr(current.length),
    actualNext.length
  );
}

export interface Sum {
  s: string;
  carry: number;
}

export function addOne(s: string): string {
  const sum: Sum = s.split('').reduceRight(
    (acc: { s: string; carry: number }, e: string) => {
      if (acc.carry > 0) {
        const t: number = +e + acc.carry;
        acc.s = `${t % 10}${acc.s}`;
        acc.carry = t > 9 ? 1 : 0;
      } else {
        acc.s = `${e}${acc.s}`;
      }

      return acc;
    },
    { s: '', carry: 1 }
  );

  if (sum.carry === 1) {
    sum.s = `1${sum.s}`;
  }

  return sum.s;
}
