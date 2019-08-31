/**
 * Generate Parens
 */

function parens(n: number): string[] {
  const s: string[] = [];
  const result: string[] = [];

  generateParens(n, n, 0, s, result);

  return result;
}

function generateParens(openRem: number, closingRem: number, index: number, s: string[], result: string[]): void {
  if (openRem < 0 || closingRem < openRem) {
    return;
  }

  if (openRem === 0 && closingRem === 0) {
    result.push(s.join(''));

    return;
  }

  s[index] = '(';
  generateParens(openRem - 1, closingRem, index + 1, s, result);

  s[index] = ')';
  generateParens(openRem, closingRem - 1, index + 1, s, result);
}

export { parens };
