/**
 * Interviewbit - SubsetsIi
 */

function subsetsIi(array: number[]): number[][] {
  function helper(startIndex: number, soFar: number[]): void {
    result.push(soFar.slice());

    for (let i = startIndex; i < l; i = i + 1) {
      if (i > startIndex && array[i] === array[i - 1]) {
        continue;
      }
      soFar.push(array[i]);
      helper(i + 1, soFar);
      soFar.pop();
    }
  }

  const l = array.length;
  if (l === 0) {
    return [[]];
  }

  const result: number[][] = [];
  array.sort((a, b) => a - b);
  helper(0, []);

  return result;
}

export { subsetsIi };
