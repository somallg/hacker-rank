/**
 * @url https://www.hackerrank.com/challenges/set-covering/problem
 */

function intersect<T>(setA: Set<T>, setB: Set<T>) {
  return new Set<T>(Array.from(setA).filter(x => setB.has(x)));
}

function difference<T>(setA: Set<T>, setB: Set<T>): Set<T> {
  return new Set<T>(Array.from(setA).filter(x => !setB.has(x)));
}

function solveSetCovering(
  statesNeeded: Set<string>,
  stations: Map<string, Set<string>>
): Set<string> {
  const finalStations = new Set<string>();

  while (statesNeeded.size > 0) {
    const [bestStation, bestStatesCovered] = Array.from(stations)
      .map(([station, statesForStation]): [string, Set<string>] => [
        station,
        intersect(statesNeeded, statesForStation)
      ])
      .reduce(([bestStation, bestStatesCovered], [station, covered]) => {
        if (bestStatesCovered.size < covered.size) {
          return [station, covered];
        }
        return [bestStation, bestStatesCovered];
      });

    stations.delete(bestStation);
    /* tslint:disable:no-parameter-reassignment */
    statesNeeded = difference(statesNeeded, bestStatesCovered);
    finalStations.add(bestStation);
  }

  return finalStations;
}

export { intersect, difference, solveSetCovering };
