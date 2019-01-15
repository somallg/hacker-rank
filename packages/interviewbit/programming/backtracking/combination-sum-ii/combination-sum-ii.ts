/**
 * Interviewbit - CombinationSumIi
 */

function combinationSumIi(candidates: number[], targetSum: number): number[][] {
  function combine(
    startIndex: number,
    // tslint:disable-next-line
    targetSum: number,
    soFar: number[]
  ): void {
    if (targetSum === 0) {
      result.push(soFar.slice());

      return;
    }

    for (let i: number = startIndex; i < candidates.length; i = i + 1) {
      const candidate: number = candidates[i];
      if (i > startIndex && candidates[i] === candidates[i - 1]) {
        continue;
      }
      if (targetSum < candidate) {
        break;
      } else {
        soFar.push(candidate);
        combine(i + 1, targetSum - candidate, soFar);
        soFar.pop();
      }
    }
  }

  const result: number[][] = [];
  candidates.sort((a: number, b: number) => a - b);
  combine(0, targetSum, []);

  return result;
}

export { combinationSumIi };
