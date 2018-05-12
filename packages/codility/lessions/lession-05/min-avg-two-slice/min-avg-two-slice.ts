/**
 */

function average(...args: number[]): number {
  return args.reduce((acc, n) => acc + n) / args.length;
}

function solveMinAvgTwoSlice(arr: number[]): number {
  // there must be a slice of length 2 or 3 having minimal average value
  let minIndex = 0;
  let minAvg = Infinity;
  let avg = 0;
  const n = arr.length;

  debugger;

  for (let i = 0; i < n - 2; i = i + 1) {
    // try slice of length 2
    avg = average(arr[i], arr[i + 1]);
    if (avg < minAvg) {
      minIndex = i;
      minAvg = avg;
    }

    // try again with slice of length 3
    avg = average(arr[i], arr[i + 1], arr[i + 2]);
    if (avg < minAvg) {
      minIndex = i;
      minAvg = avg;
    }
  }

  // try slice of last 2 element
  avg = average(arr[n - 1], arr[n - 2]);
  if (avg < minAvg) {
    minIndex = n - 2;
    minAvg = avg;
  }

  return minIndex;
}

export { solveMinAvgTwoSlice };
