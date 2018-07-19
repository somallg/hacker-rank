/**
 */

function findIndexOfElementGreaterThen(
  collection: number[],
  element: number,
  index = 0
) {
  let start = index;
  let end = collection.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    const middleElement = collection[middle];
    if (element < middleElement) {
      end = middle - 1;
    } else if (element >= middleElement) {
      start = middle + 1;
    }
  }

  return end;
}

function solveNumberOfDiscIntersections(arr: number[]): number {
  let startAndEndPoints = arr.map((radius, center) => [
    center - radius,
    center + radius
  ]);
  startAndEndPoints = startAndEndPoints.sort(
    (pointA, pointB) => pointA[0] - pointB[0]
  );
  const startPoints = startAndEndPoints.map(point => point[0]);
  let count = 0;

  for (let i = 0; i < startPoints.length; i = i + 1) {
    const endPoint = startAndEndPoints[i][1];
    // binary search endPoint in startPoints from index i + 1(startPoints is already sorted)
    const nbIntersections =
      findIndexOfElementGreaterThen(startPoints, endPoint, i + 1) - i; // substract already counted intersections
    count = count + nbIntersections;

    if (count > 10e6) {
      return -1;
    }
  }

  return count;
}

export { findIndexOfElementGreaterThen, solveNumberOfDiscIntersections };
