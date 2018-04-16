function solveBinaryGap(n) {
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
      { result: [], temp: [], isBinaryGap: false }
    )
    .result.map(e => e.length)
    .reduce((a, b) => (a > b ? a : b), 0);
}

export { solveBinaryGap };
