/**
 * @url https://www.hackerrank.com/challenges/counting-valley/problem
 */
export interface StepTrace {
  level: number;
  path: number[];
}

export function solveCountingValley(_: number, s: string): number {
  return s
    .split('')
    .reduce(
      (acc: StepTrace, e: string) => {
        if (e === 'U') {
          acc.level = acc.level + 1;
        } else {
          acc.level = acc.level - 1;
        }
        acc.path.push(acc.level);

        return acc;
      },
      // tslint:disable-next-line
      <StepTrace>{ level: 0, path: [] }
    )
    .path.filter(
      (e: number, i: number, arr: number[]) =>
        e < 0 || (e === 0 && arr[i - 1] < 0)
    )
    .filter((e: number) => e === 0).length;
}
