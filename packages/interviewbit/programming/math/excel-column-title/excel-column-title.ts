/**
 * ExcelColumnTitle
 */

function getTitle(n: number): string {
  return String.fromCharCode(65 + n);
}

function excelColumnTitle(n: number): string {
  let result = '';

  while (n > 0) {
    const mod = (n - 1) % 26;
    result = `${getTitle(mod)}${result}`;
    n = Math.floor((n - 1) / 26);
  }

  return result;
}

export { excelColumnTitle };
