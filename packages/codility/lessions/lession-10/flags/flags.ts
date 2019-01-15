/**
 */

function getPeaks(arr: number[]): boolean[] {
  return arr.map(
    (n: number, index: number) =>
      index > 0 &&
      index < arr.length - 1 &&
      n > arr[index - 1] &&
      n > arr[index + 1]
  );
}

function solveFlags(arr: number[]): number {
  const l: number = arr.length;
  const peaks: boolean[] = getPeaks(arr);

  // check flag
  let flags: number = 0;
  for (let i: number = 1; i * i <= l; i = i + 1) {
    if (!checkFlags(i, arr, peaks)) {
      return flags;
    }
    flags = flags + 1;
  }

  return flags;
}

function checkFlags(nbFlags: number, arr: number[], peaks: boolean[]): boolean {
  const l: number = arr.length;
  let flags: number = nbFlags;
  let index: number = 0;

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
