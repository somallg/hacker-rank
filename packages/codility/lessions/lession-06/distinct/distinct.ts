/**
 */

function solveDistinct(arr: number[]): number {
  const distinctSet = arr.reduce((acc, n) => {
    acc.add(n);
    return acc;
  }, new Set<number>());

  return distinctSet.size;
}

export { solveDistinct };
