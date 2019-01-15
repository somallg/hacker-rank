interface IBinaryGap {
  result: string[][];
  temp: string[];
  isBinaryGap: boolean;
}

function solveBinaryGap(n: number): number {
  return Number(n)
    .toString(2)
    .split('')
    .reduce(
      (acc: IBinaryGap, e: string) => {
        if (e === '1') {
          acc.isBinaryGap = true;
          acc.result.push(acc.temp);
          acc.temp = [];
        } else {
          // e === 0
          if (acc.isBinaryGap) {
            acc.temp.push(e);
          }
        }

        return acc;
      },
      // tslint:disable-next-line
      <IBinaryGap>{ result: [], temp: [], isBinaryGap: false }
    )
    .result.map((e: string[]) => e.length)
    .reduce((a: number, b: number) => (a > b ? a : b), 0);
}

export { solveBinaryGap };
