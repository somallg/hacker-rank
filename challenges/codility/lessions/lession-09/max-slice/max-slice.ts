/**
 */

function solveMaxSlice(arr: number[]): number {
  let maxEnding = 0;
  let maxSlice = 0;

  arr.forEach(a => {
    maxEnding = Math.max(0, maxEnding + a);
    maxSlice = Math.max(maxSlice, maxEnding);
  });

  return maxSlice;
}

export { solveMaxSlice };
