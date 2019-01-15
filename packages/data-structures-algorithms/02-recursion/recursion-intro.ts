function recursiveExponent(base: number, expo: number): number {
  if (expo <= 1) {
    return base;
  }

  return base * recursiveExponent(base, expo - 1);
}

function recursiveMultiplier(arr: number[], num: number): number[] {
  if (arr.length <= 0) {
    return [];
  }

  const [head, ...tail]: number[] = arr;

  return [head * num].concat(recursiveMultiplier(tail, num));
}

function recursiveReverse<T>(arr: T[]): T[] {
  if (arr.length <= 0) {
    return [];
  }

  const [head, ...tail]: T[] = arr;

  return recursiveReverse(tail).concat(head);
}

export { recursiveExponent, recursiveMultiplier, recursiveReverse };
