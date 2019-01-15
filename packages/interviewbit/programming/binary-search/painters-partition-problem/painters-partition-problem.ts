/**
 * PaintersPartitionProblem
 */

function isPossible(k: number, tMax: number, timeTaken: number[]): boolean {
  // find out if it is possible to paint in time T or less
  let timeSoFar: number = 0;
  timeTaken.forEach((t: number) => {
    if (timeSoFar + t > tMax) {
      // tslint:disable-next-line
      k = k - 1;
      timeSoFar = t;
    } else {
      timeSoFar = timeSoFar + t;
    }
  });

  return k - 1 >= 0; // (-1 because the last job haven't counted yet)
}

function paintersPartitionProblem(
  k: number,
  unitTime: number,
  l: number[]
): number {
  if (k === 0) {
    return 0;
  }
  const sum: number = l.reduce((acc: number, a: number) => acc + a);
  let start: number = l.reduce((acc: number, a: number) => Math.max(acc, a));
  let end: number = sum;

  while (start <= end) {
    // tslint:disable:no-bitwise
    const middle: number = (start + end) >>> 1;

    if (isPossible(k, middle, l)) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return (start * unitTime) % 10000003;
}

export { paintersPartitionProblem };
