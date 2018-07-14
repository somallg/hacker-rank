function generateString(length: number, seed = 'x'): string {
  let result = '';

  while (length > 0) {
    if (length & 1) {
      result = result + seed;
    }

    /* tslint:disable:no-parameter-reassignment */
    length = length >>> 1;
    seed = seed + seed;
  }

  return result;
}

export { generateString };
