/*
 * Utils function which generate an array of size length
 * Depend on the value of random, if random is true
 * then it generata an array where each element of the array
 * in range [startFrom, ...maxExclusive - 1].
 * If random is false then it return an array [0...0] of size length
 */

export { generateArray, generateStringArray, generateMatrix, zip };

function generateArray(
  length: number,
  maxExclusive: number = length,
  startFrom: number = 0,
  random: boolean = true
): number[] {
  const res: number[] = [];

  for (let i: number = 0; i < length; i = i + 1) {
    // tslint:disable:insecure-random
    res.push(random ? Math.floor(Math.random() * maxExclusive + startFrom) : 0);
  }

  return res;
}

function generateStringArray(length: number): string[] {
  return generateArray(length).map(String);
}

function generateMatrix(
  length: number,
  maxExclusive: number = length
): number[][] {
  const result: number[][] = [];

  for (let i: number = 0; i < length; i = i + 1) {
    result[i] = generateArray(length, maxExclusive);
  }

  return result;
}

function zip<T>(arrayA: T[], arrayB: T[]): T[][] {
  return arrayA.map((a: T, index: number) => [a, arrayB[index]]);
}
