/**
 */

function getPeaks(arr: number[]): boolean[] {
  return arr.map(
    (n, index) =>
      index > 0 &&
      index < arr.length - 1 &&
      n > arr[index - 1] &&
      n > arr[index + 1]
  );
}

function solveFlags(arr: number[]): number {
  const l = arr.length;
  const peaks = getPeaks(arr);

  // check flag
  let flags = 0;
  for (let i = 1; i * i <= l; i = i + 1) {
    if (!checkFlags(i, arr, peaks)) {
      return flags;
    }
    flags = flags + 1;
  }

  return flags;
}

function checkFlags(nbFlags: number, arr: number[], peaks: boolean[]): boolean {
  const l = arr.length;
  let flags = nbFlags;
  let index = 0;

  while (index < l && flags > 0) {
    if (peaks[index]) {
      flags = flags - 1;
      index = index + nbFlags;
    } else {
      index = index + 1;
    }
  }
  return flags === 0;
}

export { getPeaks, solveFlags };
