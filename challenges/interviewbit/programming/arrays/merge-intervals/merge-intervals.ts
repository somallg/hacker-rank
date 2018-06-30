/**
 * Interviewbit - MergeIntervals
 */

function isOverlapped([x1, y1]: number[], [x2, y2]: number[]) {
  return (y1 >= x2 && y1 <= y2) || (x1 >= x2 && x1 <= y2);
}

function mergeOverlappedIntervals([x1, y1]: number[], [x2, y2]: number[]) {
  return [Math.min(x1, x2), Math.max(y1, y2)];
}

function mergeIntervals(
  intervals: number[][],
  newInterval: number[]
): number[][] {
  const l = intervals.length;
  const result: number[][] = [];
  if (l === 0) {
    result.push(newInterval);
    return result;
  }

  for (let i = 0; i < intervals.length; i = i + 1) {
    const currentInterval = intervals[i];
    if (newInterval.length) {
      if (isOverlapped(currentInterval, newInterval)) {
        // tslint:disable-next-line
        newInterval = mergeOverlappedIntervals(currentInterval, newInterval);
        continue;
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
