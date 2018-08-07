/**
 * PrettyPrint
 */

function prettyPrint(n: number): number[][] {
  const l = 2 * n - 1;
  const result = Array(l)
    .fill(0)
    .map(_ => Array<number>(l).fill(n));

  for (let i = 1; i < n; i = i + 1) {
    for (let j = i; j <= l - i - 1; j = j + 1) {
      result[i][j] = result[j][l - i - 1] = result[l - i - 1][
        l - j - 1
      ] = result[l - j - 1][i] = n - i;
    }
  }

  return result;
}

export { prettyPrint };
