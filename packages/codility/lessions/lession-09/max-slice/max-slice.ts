/**
 */

function solveMaxSlice(arr: number[]): number {
  let maxEnding: number = 0;
  let maxSlice: number = 0;

  arr.forEach((a: number) => {
    maxEnding = Math.max(0, maxEnding + a);
    maxSlice = Math.max(maxSlice, maxEnding);
  });

  return maxSlice;
}

export { solveMaxSlice };
