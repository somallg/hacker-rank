/**
 * PrettyPrint
 */

function prettyPrint(n: number): number[][] {
  const l: number = n * 2 - 1;
  const result: number[][] = Array(l)
    .fill(0)
    .map(() => Array<number>(l).fill(n));

  for (let i: number = 1; i < n; i = i + 1) {
    for (let j: number = i; j <= l - i - 1; j = j + 1) {
      result[i][j] = result[j][l - i - 1] = n - i;
      result[l - i - 1][l - j - 1] = result[l - j - 1][i] = n - i;
    }
  }

  return result;
}

export { prettyPrint };
