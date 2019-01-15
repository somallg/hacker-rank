/**
 * ExcelColumnTitle
 */

function getTitle(n: number): string {
  return String.fromCharCode(n + 65);
}

function excelColumnTitle(n: number): string {
  let result: string = '';

  while (n > 0) {
    const mod: number = (n - 1) % 26;
    result = `${getTitle(mod)}${result}`;
    // tslint:disable-next-line
    n = Math.floor((n - 1) / 26);
  }

  return result;
}

export { excelColumnTitle };
