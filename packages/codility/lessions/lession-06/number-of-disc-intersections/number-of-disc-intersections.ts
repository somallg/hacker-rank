/**
 */

function findIndexOfElementGreaterThen(
  collection: number[],
  element: number,
  index: number = 0
): number {
  let start: number = index;
  let end: number = collection.length - 1;

  while (start <= end) {
    const middle: number = Math.floor((start + end) / 2);
    const middleElement: number = collection[middle];
    if (element < middleElement) {
      end = middle - 1;
    } else if (element >= middleElement) {
      start = middle + 1;
    }
  }

  return end;
}

function solveNumberOfDiscIntersections(arr: number[]): number {
  let startAndEndPoints: number[][] = arr.map(
    (radius: number, center: number) => [center - radius, center + radius]
  );
  startAndEndPoints = startAndEndPoints.sort(
    (pointA: number[], pointB: number[]) => pointA[0] - pointB[0]
  );
  const startPoints: number[] = startAndEndPoints.map(
    (point: number[]) => point[0]
  );
  let count: number = 0;

  for (let i: number = 0; i < startPoints.length; i = i + 1) {
    const endPoint: number = startAndEndPoints[i][1];
    // binary search endPoint in startPoints from index i + 1(startPoints is already sorted)
    const nbIntersections: number =
      findIndexOfElementGreaterThen(startPoints, endPoint, i + 1) - i; // substract already counted intersections
    count = count + nbIntersections;

    if (count > 10e6) {
      return -1;
    }
  }

  return count;
}

export { findIndexOfElementGreaterThen, solveNumberOfDiscIntersections };
