interface Occurence {
  [key: string]: number;
}

function solveOddOccurrencesInArray(n: number[]): number {
  const defaultValue: Occurence = {};

  const occ: Occurence = n.reduce((acc: Occurence, e: number) => {
    acc[e] = acc[e] === undefined ? 1 : acc[e] + 1;

    return acc;
  }, defaultValue);

  return Object.keys(occ)
    .map((k: string) => [Number(k), occ[k]])
    .filter((e: number[]) => e[1] % 2 === 1)
    .map((e: number[]) => e[0])[0];
}

export { solveOddOccurrencesInArray };
