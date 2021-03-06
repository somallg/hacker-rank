/**
 */
interface GenomicOccurrence {
  A: number;
  C: number;
  G: number;
  T: number;
}

function diffGenomic(
  occA: GenomicOccurrence,
  occB: GenomicOccurrence
): GenomicOccurrence {
  return ['A', 'C', 'G', 'T'].reduce(
    (acc: GenomicOccurrence, dna: string) => {
      acc[dna] = occA[dna] - occB[dna];

      return acc;
    },
    // tslint:disable-next-line
    <GenomicOccurrence>{}
  );
}

function solveGenomicRangeQuery(
  dna: string,
  start: number[],
  end: number[]
): number[] {
  // apply prefixSums to store occurrence of a genomic from 0 to index k
  const occurence: GenomicOccurrence[] = [...dna.split('')].reduce(
    // tslint:disable-next-line
    (acc, dna, i) => {
      const previous: GenomicOccurrence = acc[i];
      const newOcc: GenomicOccurrence = { ...previous };
      newOcc[dna] = newOcc[dna] + 1;
      acc.push(newOcc);

      return acc;
    },
    <GenomicOccurrence[]>[{ A: 0, C: 0, G: 0, T: 0 }]
  );

  return (
    start
      .map((e: number, i: number) => [e, end[i]])
      // tslint:disable-next-line
      .map(([start, end]: number[]) => {
        const startOcc: GenomicOccurrence = occurence[start];
        const endOcc: GenomicOccurrence = occurence[end + 1];
        const rangeOcc: GenomicOccurrence = diffGenomic(endOcc, startOcc);

        return rangeOcc.A > 0 ? 1 : rangeOcc.C > 0 ? 2 : rangeOcc.G > 0 ? 3 : 4;
      })
  );
}

export { solveGenomicRangeQuery };
