/**
 * Interviewbit - Permutations
 */

function permutations(array: number[]): number[][] {
  const result: number[][] = [];
  const using: {} = {};

  const permute: (candidates: number[], soFar: number[]) => void = (
    candidates: number[],
    soFar: number[]
  ): void => {
    if (soFar.length === candidates.length) {
      result.push(soFar.slice());

      return;
    }

    // tslint:disable-next-line
    for (let i: number = 0; i < candidates.length; i = i + 1) {
      if (!using[candidates[i]]) {
        using[candidates[i]] = 1;
        soFar.push(candidates[i]);
        permute(candidates, soFar);
        using[candidates[i]] = 0;
        soFar.pop();
      }
    }
  };

  array.sort((a: number, b: number) => a - b);
  permute(array, []);

  return result;
}

export { permutations };
