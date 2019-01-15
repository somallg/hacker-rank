/**
 * Interviewbit - ExcelColumnNumber
 */

function getCharCode(code: string): number {
  return code.charCodeAt(0) - 64;
}

function excelColumnNumber(columnTile: string): number {
  let result: number = 0;

  const l: number = columnTile.length;
  for (let i: number = 0; i < l; i = i + 1) {
    result = result * 26 + getCharCode(columnTile[i]);
  }

  return result;
}

export { excelColumnNumber };
