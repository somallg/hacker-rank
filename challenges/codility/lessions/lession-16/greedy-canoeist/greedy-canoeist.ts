/**
 * Codility - GreedyCanoeist
 */

function greedyCanoeist(w: number[], k: number): number {
  let result = 0;
  let j = 0;
  let i = w.length - 1;

  while (i >= j) {
    if (w[i] + w[j] <= k) {
      j = j + 1;
    }
    result = result + 1;
    i = i - 1;
  }

  return result;
}

export { greedyCanoeist };
