/**
 * ValidNumber
 */

function isFloat(s: string): boolean {
  return isPositiveFloat(s) || isNegativeFloat(s);
}

function isPositiveFloat(s: string): boolean {
  if (s === '') {
    return false;
  }

  const dotIndex: number = s.indexOf('.');
  if (dotIndex !== -1) {
    return (
      (isInteger(s.substr(0, dotIndex)) || dotIndex === 0) &&
      isInteger(s.substr(dotIndex + 1))
    );
  }

  return false;
}

function isNegativeFloat(s: string): boolean {
  if (s[0] === '-') {
    return isPositiveFloat(s.substr(1));
  }

  return false;
}

function isExponential(s: string): boolean {
  if (s === '') {
    return false;
  }

  const eIndex: number = s.indexOf('e');
  if (eIndex !== -1) {
    return (
      isFloatOrInteger(s.substr(0, eIndex)) && isInteger(s.substr(eIndex + 1))
    );
  }

  return false;
}

function isFloatOrInteger(s: string): boolean {
  return isFloat(s) || isInteger(s);
}

function isInteger(s: string): boolean {
  return isNegativeInteger(s) || isPositiveInteger(s);
}

function isNegativeInteger(s: string): boolean {
  if (s[0] === '-') {
    return isPositiveInteger(s.substr(1));
  }

  return false;
}

function isPositiveInteger(s: string): boolean {
  if (s === '') {
    return false;
  }

  return s
    .split('')
    .map((d: string) => d.charCodeAt(0))
    .every((c: number) => c >= 48 && c <= 57);
}

function validNumber(s: string): number {
  // tslint:disable-next-line
  s = s.trim();

  return isInteger(s) || isFloat(s) || isExponential(s) ? 1 : 0;
}

export { validNumber };
