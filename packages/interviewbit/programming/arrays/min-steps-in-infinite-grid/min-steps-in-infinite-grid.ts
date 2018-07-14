/**
 * Interviewbit - MinStepsInInfiniteGrid
 */

import { zip } from '@challenges/util';

function calculateDistance([x1, y1]: number[], [x2, y2]: number[]): number {
  // optmize distance should be diagonal and then <- or ->
  return Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
}

function minStepsInInfiniteGrid(starts: number[], ends: number[]): number {
  const l = starts.length;
  if (l <= 1) {
    return 0;
  }

  const points = zip(starts, ends);
  let result = 0;

  for (let i = 1; i < l; i = i + 1) {
    result = result + calculateDistance(points[i - 1], points[i]);
  }

  return result;
}

export { minStepsInInfiniteGrid };
