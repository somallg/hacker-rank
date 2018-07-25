/**
 * CountElementOccurence
 */

type PredicateFn = (n: number) => boolean;

function countElementOccurence(array: number[], target: number): number {
  const l = array.length;
  if (l === 0) {
    return 0;
  }

  function binarySearchBy(predicateFn: PredicateFn): number {
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

  const startIndex = binarySearchBy(middle => array[middle] < target);
  const endIndex = binarySearchBy(middle => array[middle] <= target);

  return endIndex - startIndex;
}

export { countElementOccurence };
