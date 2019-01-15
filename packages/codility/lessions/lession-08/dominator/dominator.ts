/**
 */

import { Stack } from '@challenges/codility';

function findLeaderAndIndex(arr: number[]): number[][] {
  const candiateStack: Stack<number> = arr.reduce(
    (acc: Stack<number>, n: number) => {
      acc.push(n);

      if (acc.length > 1) {
        // check 2 first element of acc
        const first: number = acc.pop();
        if (first === acc.peek()) {
          // tentative candidate push back
          acc.push(first);
        } else {
          acc.pop();
        }
      }

      return acc;
    },
    new Stack<number>()
  );

  while (candiateStack.length) {
    const candiate: number = candiateStack.pop();
    const candidateFound: number[][] = arr
      .map((n: number, i: number) => [n, i]) // save the index to use later
      .filter(([n]: number[]) => n === candiate);

    if (candidateFound.length > arr.length >>> 1) {
      return candidateFound;
    }
  }

  return [];
}

function solveDominator(arr: number[]): number {
  const leaderWithIndex: number[][] = findLeaderAndIndex(arr);

  return leaderWithIndex.length === 0 ? -1 : leaderWithIndex[0][1];
}

export { findLeaderAndIndex, solveDominator };
