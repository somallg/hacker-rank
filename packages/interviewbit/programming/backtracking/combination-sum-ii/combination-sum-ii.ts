/**
 * Interviewbit - CombinationSumIi
 */

function combinationSumIi(candidates: number[], targetSum: number): number[][] {
  function combine(
    startIndex: number,
    targetSum: number,
    soFar: number[]
  ): void {
    if (targetSum === 0) {
      result.push(soFar.slice());
      return;
    }

    for (let i = startIndex; i < candidates.length; i = i + 1) {
      const candidate = candidates[i];
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
  candidates.sort((a, b) => a - b);
  combine(0, targetSum, []);

  return result;
}

export { combinationSumIi };
