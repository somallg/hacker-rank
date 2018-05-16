/**
 */
interface GenomicOccurrence {
  A: number;
  C: number;
  G: number;
  T: number;
}

function diffGenomic(occA: GenomicOccurrence, occB: GenomicOccurrence) {
  return ['A', 'C', 'G', 'T'].reduce(
    (acc, dna) => {
      acc[dna] = occA[dna] - occB[dna];
      return acc;
    },
    {} as GenomicOccurrence
  );
}

function solveGenomicRangeQuery(
  dna: string,
  start: number[],
  end: number[]
): number[] {
  // apply prefixSums to store occurrence of a genomic from 0 to index k
  const occurence: GenomicOccurrence[] = [...dna.split('')].reduce(
    (acc, dna, i) => {
      const previous = acc[i];
      const newOcc = { ...previous };
      newOcc[dna] = newOcc[dna] + 1;
      acc.push(newOcc);

      return acc;
    },
    [{ A: 0, C: 0, G: 0, T: 0 }] as GenomicOccurrence[]
  );

  return start.map((e, i) => [e, end[i]]).map(([start, end]) => {
    const startOcc = occurence[start];
    const endOcc = occurence[end + 1];
    const rangeOcc = diffGenomic(endOcc, startOcc);

    return rangeOcc.A > 0 ? 1 : rangeOcc.C > 0 ? 2 : rangeOcc.G > 0 ? 3 : 4;
  });
}

export { solveGenomicRangeQuery };
