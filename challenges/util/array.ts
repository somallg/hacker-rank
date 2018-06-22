function generateArray(
  length: number,
  maxExclusive = length,
  startFrom = 0,
  random = true
) {
  const res = [];

  for (let i = 0; i < length; i = i + 1) {
    res.push(random ? Math.floor(Math.random() * maxExclusive + startFrom) : 0);
  }

  return res;
}

function zip<T>(arrayA: T[], arrayB: T[]): T[][] {
  return arrayA.map((a, index) => [a, arrayB[index]]);
}

export { generateArray, zip };
