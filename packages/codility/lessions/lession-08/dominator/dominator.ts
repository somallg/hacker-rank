/**
 */

import { Stack } from '@challenges/codility';

function findLeaderAndIndex(arr: number[]): number[][] {
  const candiateStack = arr.reduce((acc, n) => {
    acc.push(n);

    if (acc.length > 1) {
      // check 2 first element of acc
      const first = acc.pop();
      if (first === acc.peek()) {
        // tentative candidate push back
        acc.push(first);
      } else {
        acc.pop();
      }
    }

    return acc;
  }, new Stack<number>());

  while (candiateStack.length) {
    const candiate = candiateStack.pop();
    const candidateFound = arr
      .map((n, i) => [n, i]) // save the index to use later
      .filter(([n]) => n === candiate);

    if (candidateFound.length > arr.length >>> 1) {
      return candidateFound;
    }
  }

  return [];
}

function solveDominator(arr: number[]): number {
  const leaderWithIndex = findLeaderAndIndex(arr);

  return leaderWithIndex.length === 0 ? -1 : leaderWithIndex[0][1];
}

export { findLeaderAndIndex, solveDominator };
