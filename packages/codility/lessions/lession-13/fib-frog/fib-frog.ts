/**
 * Codility - FibFrog
 */

function buildFib(max: number): number[] {
  const fib: number[] = [];

  let old1: number = 1;
  let old2: number = 1;
  let next: number = 1;

  while (next <= max) {
    fib.push(next);
    next = old1 + old2;
    old2 = old1;
    old1 = next;
  }

  return fib;
}

function solution(arr: number[]): number {
  const endPosition: number = arr.length;
  const fibArr: number[] = buildFib(endPosition + 1);

  let iteration: number = 0;
  let starts: number[] = [-1];
  const checked: Map<number, boolean> = new Map<number, boolean>();

  while (starts.length > 0) {
    const queue: number[] = [];

    for (const startPosition of starts) {
      for (const fib of fibArr) {
        const nextPosition: number = startPosition + fib;

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
