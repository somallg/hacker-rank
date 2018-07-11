/**
 * Interviewbit - ExcelColumnNumber
 */

function getCharCode(code: string): number {
  return code.charCodeAt(0) - 64;
}

function excelColumnNumber(columnTile: string): number {
  let result = 0;

  const l = columnTile.length;
  for (let i = 0; i < l; i = i + 1) {
    result = 26 * result + getCharCode(columnTile[i]);
  }

  return result;
}

export { excelColumnNumber };
