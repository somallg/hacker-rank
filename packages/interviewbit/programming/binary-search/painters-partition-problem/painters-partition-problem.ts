/**
 * PaintersPartitionProblem
 */

function isPossible(k: number, tMax: number, timeTaken: number[]): boolean {
  // find out if it is possible to paint in time T or less
  let timeSoFar = 0;
  timeTaken.forEach(t => {
    if (timeSoFar + t > tMax) {
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
  const sum = l.reduce((acc, a) => acc + a);
  const maxElement = l.reduce((acc, a) => Math.max(acc, a));

  let start = maxElement;
  let end = sum;

  while (start <= end) {
    // tslint:disable:no-bitwise
    const middle = (start + end) >>> 1;

    if (isPossible(k, middle, l)) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return (start * unitTime) % 10000003;
}

export { paintersPartitionProblem };
