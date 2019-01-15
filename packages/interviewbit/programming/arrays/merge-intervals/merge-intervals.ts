/**
 * Interviewbit - MergeIntervals
 */

function isOverlapped([x1, y1]: number[], [x2, y2]: number[]): boolean {
  return Math.max(x1, x2) <= Math.min(y1, y2);
}

function mergeOverlappedIntervals(
  [x1, y1]: number[],
  [x2, y2]: number[]
): [number, number] {
  return [Math.min(x1, x2), Math.max(y1, y2)];
}

function mergeIntervals(
  intervals: number[][],
  newInterval: number[]
): number[][] {
  const l: number = intervals.length;
  const result: number[][] = [];
  if (l === 0) {
    result.push(newInterval);

    return result;
  }

  // tslint:disable-next-line
  for (let i: number = 0; i < intervals.length; i = i + 1) {
    const currentInterval: number[] = intervals[i];
    if (newInterval.length) {
      if (isOverlapped(currentInterval, newInterval)) {
        // tslint:disable-next-line
        newInterval = mergeOverlappedIntervals(currentInterval, newInterval);
      } else {
        // extreme case newInterval precedding
        if (newInterval[1] < currentInterval[0]) {
          result.push(newInterval);
          // tslint:disable-next-line
          newInterval = [];
        }
        result.push(currentInterval);
      }
    }
  }

  if (newInterval.length) {
    result.push(newInterval);
  }

  return result;
}

export { mergeIntervals };
