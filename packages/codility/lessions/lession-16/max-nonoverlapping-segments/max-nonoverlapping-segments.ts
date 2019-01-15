/**
 * Codility - MaxNonoverlappingSegments
 */

import { zip } from '@challenges/util';

function isOverlap(
  [startA, endA]: number[],
  [startB, endB]: number[]
): boolean {
  return (
    (startA <= startB && startB <= endA) || (startB <= startA && startA <= endB)
  );
}

function solution(starts: number[], ends: number[]): number {
  const segments: number[][] = zip(starts, ends);
  if (segments.length === 0) {
    return 0;
  }

  let lastSegment: number = 0;
  let result: number = 1;

  for (let i: number = 1; i < segments.length; i = i + 1) {
    if (!isOverlap(segments[i], segments[lastSegment])) {
      lastSegment = i;
      result = result + 1;
    }
  }

  return result;
}

export { solution };
