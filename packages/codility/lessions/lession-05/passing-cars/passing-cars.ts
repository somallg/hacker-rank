/**
 */
function solvePassingCars(cars: number[]): number {
  // start counting at first car travelling east
  const carsTravellingEast = cars.slice(cars.indexOf(0));

  if (carsTravellingEast.length === 0) {
    return 0;
  }

  const [first, ...rest] = carsTravellingEast;
  let count = 0;
  let factor = 1;

  for (let i = 0; i < rest.length; i = i + 1) {
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
