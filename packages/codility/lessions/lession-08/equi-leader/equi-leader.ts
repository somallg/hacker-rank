import { findLeaderAndIndex } from '../dominator/dominator';

/**
 */

function solveEquiLeader(arr: number[]): number {
  const leaderWithIndexes = findLeaderAndIndex(arr);

  if (leaderWithIndexes.length === 0) {
    return 0;
  }

  const l = arr.length;
  const [[leader]] = leaderWithIndexes;
  const nbOccurOfLeader = leaderWithIndexes.length;

  // prefix sum number occurrence of leader at index 0 -> i and the rest from i + 1 -> l - 1
  return arr
    .reduce(
      (acc, e, i) => {
        let [current = 0] = acc[Math.max(0, i - 1)] || [];

        e === leader && (current = current + 1);

        acc.push([current, nbOccurOfLeader - current]);
        return acc;
      },
      [] as number[][]
    )
    .map(([nbOccur, nbOccurLeft], index) => [
      nbOccur > (index + 1) >>> 1,
      nbOccurLeft > (l - 1 - index) >>> 1
    ])
    .filter(
      ([hasLeaderLeft, hasLeaderRight], index) =>
        index < l - 1 && hasLeaderLeft && hasLeaderRight
    ).length;
}

export { solveEquiLeader };
