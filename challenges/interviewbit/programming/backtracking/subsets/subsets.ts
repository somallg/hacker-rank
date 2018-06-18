/**
 * Interviewbit - Subsets
 */

function subsets(array: number[]): number[][] {
  array.sort((a, b) => a - b);

  const result: number[][] = [];

  const subsetsRec = (currentIndex: number, soFar: number[]): void => {
    result.push(soFar.slice());

    for (let i = currentIndex; i < array.length; i = i + 1) {
      soFar.push(array[i]);
      subsetsRec(i + 1, soFar);
      soFar.pop();
    }
  };

  subsetsRec(0, []);

  return result;
}

export { subsets };
