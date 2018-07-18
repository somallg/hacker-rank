/**
 * GridUniquePaths
 */
import { memorized } from '@challenges/util';

function gridUniquePaths(row: number, col: number): number {
  const uniquePathsRec = memorized(
    ([i, j]: [number, number]): number => {
      if (i >= row || j >= col) {
        return 1;
      }

      if (i === row - 1) {
        return 1;
      }

      if (j === col - 1) {
        return 1;
      }

      return uniquePathsRec([i + 1, j]) + uniquePathsRec([i, j + 1]);
    }
  );

  return uniquePathsRec([0, 0]);
}

export { gridUniquePaths };
