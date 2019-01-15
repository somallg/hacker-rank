/**
 * Atoi
 */

const INT_MAX: number = 2 ** 31 - 1;
const INT_MIN: number = -(2 ** 31);

function isNumeric(s: string): false | boolean {
  const [charCode, charCodeZero, charCodeNine]: number[] = [s, '0', '9'].map(
    (c: string) => c.charCodeAt(0)
  );

  return charCode >= charCodeZero && charCode <= charCodeNine;
}

function atoi(s: string): number {
  const l: number = s.length;
  let result: number = 0;
  let i: number = 0;
  let signed: number = -1;

  while (i < l && s[i] === ' ') {
    i = i + 1;
  }

  if (i === l) {
    return 0;
  }

  if (s[i] === '+') {
    signed = 1;
    i = i + 1;
  } else if (s[i] === '-') {
    signed = -1;
    i = i + 1;
  } else if (isNumeric(s[i])) {
    signed = 1;
  } else {
    return 0;
  }

  while (i < l && isNumeric(s[i])) {
    result = result * 10 + Number(s[i]);
    i = i + 1;
  }

  result = signed * result;

  return result > INT_MAX ? INT_MAX : result < INT_MIN ? INT_MIN : result;
}

export { atoi };
