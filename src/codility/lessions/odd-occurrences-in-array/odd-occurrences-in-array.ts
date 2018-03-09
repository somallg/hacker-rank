export interface IOddOccurence {
  [index: string]: number;
}

export function solveOddOccurrencesInArray(n: number[]) {
  const occ = n.reduce(
    (acc, e) => {
      acc[e] = acc[e] === undefined ? 1 : acc[e] + 1;

      return acc;
    },
    {} as IOddOccurence
  );

  return Object.keys(occ)
    .map(k => [Number(k), occ[k]])
    .filter(e => e[1] % 2 === 1)
    .map(e => e[0])[0];
}
