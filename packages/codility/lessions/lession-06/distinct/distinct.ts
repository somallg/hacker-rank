/**
 */

function solveDistinct(arr: number[]): number {
  const distinctSet: Set<number> = arr.reduce((acc: Set<number>, n: number) => {
    acc.add(n);

    return acc;
  }, new Set<number>());

  return distinctSet.size;
}

export { solveDistinct };
