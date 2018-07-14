/**
 * Codility - NailingPlanks
 */

import { zip } from '@challenges/util';

function isAllNailed(
  index: number,
  planks: number[][],
  nails: number[]
): boolean {
  const nailsPrefix = Array(2 * nails.length).fill(0);
  for (let i = 0; i <= index; i = i + 1) {
    nailsPrefix[nails[i]] = 1;
  }

  for (let i = 1; i < nailsPrefix.length; i = i + 1) {
    nailsPrefix[i] = nailsPrefix[i] + nailsPrefix[i - 1];
  }

  return planks.every(
    ([pStart, pEnd]) => nailsPrefix[pEnd] - nailsPrefix[pStart - 1] > 0
  );
}

function solution(
  planksStart: number[],
  planksEnd: number[],
  nails: number[]
): number {
  let start = 0;
  let end = nails.length - 1;
  let result = -1;

  const planks = zip(planksStart, planksEnd);

  while (start <= end) {
    const middle = (start + end) >>> 1;
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
