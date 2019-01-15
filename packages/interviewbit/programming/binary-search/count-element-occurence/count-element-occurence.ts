/**
 * CountElementOccurence
 */

type PredicateFn = (n: number) => boolean;

function countElementOccurence(array: number[], target: number): number {
  const l: number = array.length;
  if (l === 0) {
    return 0;
  }

  function binarySearchBy(predicateFn: PredicateFn): number {
    let start: number = 0;
    let end: number = l - 1;

    while (start <= end) {
      // tslint:disable:no-bitwise
      const middle: number = (start + end) >>> 1;
      if (predicateFn(middle)) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }

    return start;
  }

  const startIndex: number = binarySearchBy(
    (middle: number) => array[middle] < target
  );
  const endIndex: number = binarySearchBy(
    (middle: number) => array[middle] <= target
  );

  return endIndex - startIndex;
}

export { countElementOccurence };
