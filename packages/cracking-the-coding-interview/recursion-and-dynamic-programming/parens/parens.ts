/**
 * Generate Parens
 */

function parens(n: number): string[] {
  return generateParens(n);
}

function generateParens(n: number): string[] {
  if (n <= 1) {
    return ['()'];
  }

  const previous: string[] = generateParens(n - 1);
  let result: string[] = [];

  for (const ele of previous) {
    result = result.concat(insertParens(ele));
  }

  return [...new Set(result).values()];
}

function insertParens(ele: string): string[] {
  const result: string[] = [];

  for (let i: number = 0; i < ele.length; i += 1) {
    const left: string = ele.substr(0, i);
    const right: string = ele.substr(i);

    result.push(`${left}()${right}`);
  }

  return result;
}

export { parens };
