/**
 */
function solvePassingCars(cars: number[]): number {
  // start counting at first car travelling east
  const carsTravellingEast: number[] = cars.slice(cars.indexOf(0));

  if (carsTravellingEast.length === 0) {
    return 0;
  }

  const [first, ...rest]: number[] = carsTravellingEast;
  let count: number = 0;
  let factor: number = 1;

  // tslint:disable-next-line
  for (let i: number = 0; i < rest.length; i = i + 1) {
    if (count > 1_000_000_000) {
      return -1;
    }

    if (rest[i] === first) {
      factor += 1;
    } else {
      count += factor;
    }
  }

  return count;
}

export { solvePassingCars };
