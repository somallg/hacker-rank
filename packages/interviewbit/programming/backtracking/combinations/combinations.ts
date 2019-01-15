/**
 * Interviewbit - Combinations
 */

function combinations(n: number, k: number): number[][] {
  const result: number[][] = [];
  if (n === 0 || k === 0 || n < k) {
    return result;
  }

  const combine: (startIndex: number, soFar: number[]) => void = (
    startIndex: number,
    soFar: number[]
  ): void => {
    if (soFar.length === k) {
      result.push(soFar.slice());

      return;
    }

    for (let i: number = startIndex; i <= n; i = i + 1) {
      soFar.push(i);
      combine(i + 1, soFar);
      soFar.pop();
    }
  };

  combine(1, []);

  return result;
}

export { combinations };
