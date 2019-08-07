import { MemoFn, memorized } from '@challenges/util';

/**
 * TripleStep
 */

const tripleStep: MemoFn<number, number> = memorized((n: number) => {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  }

  return tripleStep(n - 1) + tripleStep(n - 2) + tripleStep(n - 3);
});

export { tripleStep };
