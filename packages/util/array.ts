/*
 * Utils function which generate an array of size length
 * Depend on the value of random, if random is true
 * then it generata an array where each element of the array
 * in range [startFrom, ...maxExclusive - 1].
 * If random is false then it return an array [0...0] of size length
 */
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

function generateMatrix(length: number, max = length) {
  const result = [];

  for (let i = 0; i < length; i = i + 1) {
    result[i] = generateArray(length, max);
  }

  return result;
}

function zip<T>(arrayA: T[], arrayB: T[]): T[][] {
  return arrayA.map((a, index) => [a, arrayB[index]]);
}

export { generateArray, generateMatrix, zip };
