/**
 * SearchForARange
 */

type PredicateFn = (middle: number) => boolean;

function searchForARange(array: number[], target: number): number[] {
  const l = array.length;

  function searchByPredicate(predicateFn: PredicateFn): number {
    let start = 0;
    let end = l - 1;

    while (start <= end) {
      // tslint:disable:no-bitwise
      const middle = (start + end) >>> 1;
      if (predicateFn(middle)) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }

    return start;
  }

  const startIndex = searchByPredicate(middle => {
    return array[middle] < target;
  });

  const endIndex = searchByPredicate(middle => {
    return array[middle] <= target;
  });

  if (array[startIndex] !== target) {
    return [-1, -1];
  }

  return [startIndex, endIndex - 1];
}

export { searchForARange };
