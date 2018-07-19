/**
 * Interviewbit - PascalTriangle
 */

function pascalTriangle(numRows: number): number[][] {
  if (numRows === 0) {
    return [];
  }

  const result: number[][] = [[1]];

  for (let i = 1; i < numRows; i = i + 1) {
    const tempResult = [1];
    for (let j = 1; j < result[i - 1].length; j = j + 1) {
      tempResult.push(result[i - 1][j] + result[i - 1][j - 1]);
    }
    tempResult.push(1);
    result.push(tempResult);
  }

  return result;
}

export { pascalTriangle };
