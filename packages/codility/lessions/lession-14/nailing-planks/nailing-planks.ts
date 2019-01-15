/**
 * Codility - NailingPlanks
 */

import { zip } from '@challenges/util';

function isAllNailed(
  index: number,
  planks: number[][],
  nails: number[]
): boolean {
  const nailsPrefix: number[] = Array(nails.length * 2).fill(0);
  for (let i: number = 0; i <= index; i = i + 1) {
    nailsPrefix[nails[i]] = 1;
  }

  for (let i: number = 1; i < nailsPrefix.length; i = i + 1) {
    nailsPrefix[i] = nailsPrefix[i] + nailsPrefix[i - 1];
  }

  return planks.every(
    ([pStart, pEnd]: number[]) =>
      nailsPrefix[pEnd] - nailsPrefix[pStart - 1] > 0
  );
}

function solution(
  planksStart: number[],
  planksEnd: number[],
  nails: number[]
): number {
  let start: number = 0;
  let end: number = nails.length - 1;
  let result: number = -1;

  const planks: number[][] = zip(planksStart, planksEnd);

  while (start <= end) {
    const middle: number = (start + end) >>> 1;
    if (isAllNailed(middle, planks, nails)) {
      end = middle - 1;
      result = middle;
    } else {
      start = middle + 1;
    }
  }

  return result === -1 ? result : result + 1;
}

export { solution };
