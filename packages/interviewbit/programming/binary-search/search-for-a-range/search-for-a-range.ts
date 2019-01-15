/**
 * SearchForARange
 */

type PredicateFn = (middle: number) => boolean;

function searchForARange(array: number[], target: number): number[] {
  const l: number = array.length;

  function searchByPredicate(predicateFn: PredicateFn): number {
    let start: number = 0;
    let end: number = l - 1;

    while (start <= end) {
      const middle: number = (start + end) >>> 1;
      if (predicateFn(middle)) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }

    return start;
  }

  const startIndex: number = searchByPredicate((middle: number) => {
    return array[middle] < target;
  });

  const endIndex: number = searchByPredicate((middle: number) => {
    return array[middle] <= target;
  });

  if (array[startIndex] !== target) {
    return [-1, -1];
  }

  return [startIndex, endIndex - 1];
}

export { searchForARange };
