/**
 * Interviewbit - MergeOverlappingIntervals
 */

function isOverlapped([x1, y1]: number[], [x2, y2]: number[]) {
  return Math.max(x1, x2) <= Math.min(y1, y2);
}

function mergeOverlappedIntervals([x1, y1]: number[], [x2, y2]: number[]) {
  return [Math.min(x1, x2), Math.max(y1, y2)];
}

function mergeOverlappingIntervals(array: number[][]): number[][] {
  const l = array.length;
  const result: number[][] = [];

  array.sort(([a1, b1], [a2, b2]) => (a1 === a2 ? b1 - b2 : a1 - a2));

  let i = 0;
  while (i < l) {
    let current = array[i];
    let j = i + 1;
    while (j < l && isOverlapped(current, array[j])) {
      current = mergeOverlappedIntervals(current, array[j]);
      j = j + 1;
    }

    result.push(current);
    i = j;
  }

  return result;
}

export { mergeOverlappingIntervals };
