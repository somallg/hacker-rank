/**
 * Atoi
 */

const INT_MAX = 2 ** 31 - 1;
const INT_MIN = -(2 ** 31);

function isNumeric(s: string) {
  const [charCode, charCodeZero, charCodeNine] = [s, '0', '9'].map(c =>
    c.charCodeAt(0)
  );

  return charCode >= charCodeZero && charCode <= charCodeNine;
}

function atoi(s: string): number {
  const l = s.length;
  let result = 0;
  let i = 0;
  let signed = -1;

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
    result = 10 * result + Number(s[i]);
    i = i + 1;
  }

  result = signed * result;

  return result > INT_MAX ? INT_MAX : result < INT_MIN ? INT_MIN : result;
}

export { atoi };
