/**
 * Interviewbit - Permutations
 */

function permutations(array: number[]): number[][] {
  const result: number[][] = [];
  const using: any = {};

  const permute = (candidates: number[], soFar: number[]): void => {
    if (soFar.length === candidates.length) {
      result.push(soFar.slice());
      return;
    }

    for (let i = 0; i < candidates.length; i = i + 1) {
      if (!using[candidates[i]]) {
        using[candidates[i]] = 1;
        soFar.push(candidates[i]);
        permute(candidates, soFar);
        using[candidates[i]] = 0;
        soFar.pop();
      }
    }
  };

  array.sort((a, b) => a - b);
  permute(array, []);

  return result;
}

export { permutations };
