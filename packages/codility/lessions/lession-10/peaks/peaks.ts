/**
 */

import { getPeaks } from '../flags/flags';

import { getFactors } from '../min-perimeter-rectangle/min-perimeter-rectangle';

function getBlockBySize(blockSize: number, l: number): number[][] {
  const result: number[][] = [];
  for (let i: number = 0; i < l; i = i + blockSize) {
    result.push([i, i + blockSize]);
  }

  return result;
}

function hasPeakBetween(
  [startIndex, endIndex]: [number, number],
  prefixPeaks: number[]
): boolean {
  const previousStart: number = Math.max(0, startIndex - 1);

  return (
    prefixPeaks[endIndex - 1] > prefixPeaks[previousStart] ||
    prefixPeaks[startIndex] > prefixPeaks[previousStart]
  );
}

function getFullFactors(n: number, factors: number[]): number[] {
  const oppositeFactors: number[] = [];

  for (let i: number = factors.length - 1; i >= 0; i = i - 1) {
    oppositeFactors.push(n / factors[i]);
  }

  return [...factors, ...oppositeFactors];
}

function prefixSumPeaks(peaks: boolean[]): number[] {
  return peaks.map((isPeak: boolean) => (isPeak ? 1 : 0)).reduce(
    (acc: number[], peak: number, index: number) => {
      const previousSum: number =
        acc[index - 1] === undefined ? 0 : acc[index - 1];
      acc.push(previousSum + peak);

      return acc;
    },
    <number[]>[]
  );
}

function solvePeaks(arr: number[]): number {
  const l: number = arr.length;
  const factorOfL: number[] = getFullFactors(l, getFactors(l));

  const prefixPeaks: number[] = prefixSumPeaks(getPeaks(arr));

  // we can skip block of size 1 as it's not possible to have every peak in the array
  for (let i: number = 1; i < factorOfL.length; i = i + 1) {
    // check every block of size factorOfL[i];
    const blockSize: number = factorOfL[i];
    const everyBlockHasPeak: boolean = getBlockBySize(blockSize, l).every(
      ([startIndex, endIndex]: number[]) =>
        hasPeakBetween([startIndex, endIndex], prefixPeaks)
    );

    if (everyBlockHasPeak) {
      return l / blockSize;
    }
  }

  return 0;
}

export { solvePeaks };
