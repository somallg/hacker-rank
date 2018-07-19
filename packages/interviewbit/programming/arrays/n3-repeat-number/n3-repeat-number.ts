/**
 * Interviewbit - N3RepeatNumber
 */

function n3RepeatNumber(array: number[]): number {
  const l = array.length;
  const count = new Map<number, number>();

  array.forEach(n => count.set(n, 1 + (count.get(n) || 0)));

  let result = -1;
  count.forEach((value, key) => {
    if (value > l / 3) {
      result = key;
    }
  });

  return result;
}

export { n3RepeatNumber };
