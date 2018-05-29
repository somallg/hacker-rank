/**
 * Codility - FibFrog
 */

function buildFib(max: number): number[] {
  const fib = [] as number[];

  let old1 = 1;
  let old2 = 1;
  let next = 1;

  while (next <= max) {
    fib.push(next);
    next = old1 + old2;
    old2 = old1;
    old1 = next;
  }

  return fib;
}

function solution(arr: number[]): number {
  const endPosition = arr.length;
  const fibArr = buildFib(endPosition + 1);

  let iteration = 0;
  let starts = [-1];
  const checked = new Map<number, boolean>();
  while (starts.length > 0) {
    const queue = [] as number[];

    for (let i = 0; i < starts.length; i = i + 1) {
      const startPosition = starts[i];

      for (let j = 0; j < fibArr.length; j = j + 1) {
        const fib = fibArr[j]; // how far the frog can jump
        const nextPosition = startPosition + fib;

        if (nextPosition === endPosition) {
          return iteration + 1;
        }

        if (arr[nextPosition] && !checked.get(nextPosition)) {
          queue.push(nextPosition);
          checked.set(nextPosition, true);
        }
      }
    }

    starts = queue;
    iteration = iteration + 1;
  }

  return -1;
}

export { solution };
