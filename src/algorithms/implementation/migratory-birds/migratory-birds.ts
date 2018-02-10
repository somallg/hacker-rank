/**
 * @url https://www.hackerrank.com/challenges/migratory-birds/problem
 */
interface MaxWithIndex {
  max: number;
  maxIndex: number;
}

export function migratoryBirds(n: number, ar: number[]): number {
  return ar
    .reduce((acc: number[], e: number) => {
      acc[e] = acc[e] === undefined ? 0 : acc[e] + 1;
      return acc;
    }, [])
    .reduce(
      (acc: MaxWithIndex, e: number, index: number) => {
        if (acc.max < e && e !== undefined) {
          acc.max = e;
          acc.maxIndex = index;
        }
        return acc;
      },
      { max: -Infinity, maxIndex: -1 }
    ).maxIndex;
}
