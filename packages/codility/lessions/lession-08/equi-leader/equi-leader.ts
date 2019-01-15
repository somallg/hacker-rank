/**
 */

import { findLeaderAndIndex } from '../dominator/dominator';

function solveEquiLeader(arr: number[]): number {
  const leaderWithIndexes: number[][] = findLeaderAndIndex(arr);

  if (leaderWithIndexes.length === 0) {
    return 0;
  }

  const l: number = arr.length;
  const [[leader]]: number[][] = leaderWithIndexes;
  const nbOccurOfLeader: number = leaderWithIndexes.length;

  // prefix sum number occurrence of leader at index 0 -> i and the rest from i + 1 -> l - 1
  return arr
    .reduce(
      (acc: number[][], e: number, i: number) => {
        let [current = 0]: number[] = acc[Math.max(0, i - 1)] || [];

        // tslint:disable-next-line
        e === leader && (current = current + 1);

        acc.push([current, nbOccurOfLeader - current]);

        return acc;
      },
      <number[][]>[]
    )
    .map(([nbOccur, nbOccurLeft]: number[], index: number) => [
      nbOccur > (index + 1) >>> 1,
      nbOccurLeft > (l - 1 - index) >>> 1
    ])
    .filter(
      ([hasLeaderLeft, hasLeaderRight]: boolean[], index: number) =>
        index < l - 1 && hasLeaderLeft && hasLeaderRight
    ).length;
}

export { solveEquiLeader };
