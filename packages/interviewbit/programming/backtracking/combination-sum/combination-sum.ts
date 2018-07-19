/**
 * Interviewbit - CombinationSum
 */

function combinationSum(candiates: number[], targetSum: number): number[][] {
  const result: number[][] = [];

  if (targetSum === 0) {
    return result;
  }

  const combine = (
    currentIndex: number,
    currentSum: number,
    soFar: number[]
  ) => {
    if (currentSum === targetSum) {
      result.push(soFar.slice());
      return;
    }
    if (currentSum > targetSum || currentIndex === candiates.length) {
      return;
    }

    for (let i = currentIndex; i < candiates.length; i = i + 1) {
      if (i > 0 && candiates[i] === candiates[i - 1]) {
        continue;
      }
      const candidate = candiates[i];
      soFar.push(candidate);
      combine(i, currentSum + candidate, soFar);
      soFar.pop();
    }
  };

  candiates.sort((a, b) => a - b);

  combine(0, 0, []);

  return result;
}

export { combinationSum };
