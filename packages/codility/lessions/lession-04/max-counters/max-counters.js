/**
 * @url https://www.hackerrank.com/challenges/max-counters/problem
 */

function solveMaxCounters(n, array) {
  const result = Array(n).fill(0);
  let max = -1;
  let maxCounter = false;
  let maxCounterValue = -1;

  array.forEach(e => {
    if (e <= n) {
      // increase(e)
      if (maxCounter && result[e - 1] <= maxCounterValue) {
        result[e - 1] = maxCounterValue + 1;
      } else {
        result[e - 1]++;
      }
      max = Math.max(max, result[e - 1]);
    } else {
      // max counter
      maxCounter = true;
      maxCounterValue = max;
    }
  });

  // now fix all value in result array
  return result.map(e => Math.max(e, maxCounterValue));
}

export { solveMaxCounters };
