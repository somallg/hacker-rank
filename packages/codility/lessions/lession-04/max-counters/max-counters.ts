/**
 */

function solveMaxCounters(n: number, array: number[]): number[] {
  const result: number[] = Array(n).fill(0);
  let max: number = -1;
  let maxCounter: boolean = false;
  let maxCounterValue: number = -1;

  array.forEach((e: number) => {
    if (e <= n) {
      // increase(e)
      if (maxCounter && result[e - 1] <= maxCounterValue) {
        result[e - 1] = maxCounterValue + 1;
      } else {
        result[e - 1] = result[e - 1] + 1;
      }
      max = Math.max(max, result[e - 1]);
    } else {
      // max counter
      maxCounter = true;
      maxCounterValue = max;
    }
  });

  // now fix all value in result array
  return result.map((e: number) => Math.max(e, maxCounterValue));
}

export { solveMaxCounters };
