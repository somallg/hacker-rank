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
      (acc, e) => {
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
      { result: [], temp: [], isBinaryGap: false } as IBinaryGap
    )
    .result.map(e => e.length)
    .reduce((a, b) => (a > b ? a : b), 0);
}

export { solveBinaryGap };
